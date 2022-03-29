// Documentation for this map project
// https://www.youtube.com/watch?v=2po9_CIRW7I

import { useState, useMemo, useCallback, useRef } from 'react'
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api'
import Places from './places'
import Distance from './distance'

type LatLngLiteral = google.maps.LatLngLiteral
type DirectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

const Map = () => {
  const [pickup, setPickup] = useState<LatLngLiteral>()
  const [dropoff, setDropoff] = useState<LatLngLiteral>()
  const [directions, setDirections] = useState<DirectionsResult>()
  const mapRef = useRef<GoogleMap>()
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 38.2673594, lng: -104.6609081 }),
    []
  )
  const options = useMemo<MapOptions>(
    () => ({
      mapId: 'd725b651261adacd',
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  )
  const onLoad = useCallback((map) => (mapRef.current = map), [])

  const fetchDirections = () => {
    if (!pickup || !dropoff) return

    const service = new google.maps.DirectionsService()
    service.route(
      {
        origin: pickup,
        destination: dropoff,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === 'OK' && result) {
          setDirections(result)
        }
      }
    )
  }

  return (
    <div className="flex h-screen flex-col md:h-auto">
      {/* HEADER (TABLET & DESKTOP) */}
      <div className="hidden h-32 items-center bg-gradient-to-tr from-orange-200 to-orange-500 md:flex">
        <p className="mb-8 p-4 text-4xl font-bold text-white">
          Where would you like to go with us?
        </p>
      </div>
      {/* MAP */}
      <div className="my-0 h-1/2 w-auto drop-shadow-xl md:order-2 md:mx-auto md:my-20 md:h-96 md:w-3/4">
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
          {pickup && <Marker position={pickup} />}
          {dropoff && <Marker position={dropoff} />}
          {directions && (
            <DirectionsRenderer
              directions={directions}
              options={{
                polylineOptions: {
                  strokeColor: '#ed8936',
                  strokeWeight: 5,
                },
              }}
            />
          )}
        </GoogleMap>
      </div>
      {/* CONTROLS */}
      <div
        className={`mx-auto w-full rounded-lg bg-white drop-shadow-[0_20px_13px_rgba(0,0,0,0.20)] md:-mt-8 md:w-11/12 ${
          directions ? 'hidden md:block' : ''
        }`}
      >
        <div className="h-1/2 p-4 md:flex md:items-start md:justify-between lg:items-center">
          {/* INPUTS */}
          <div className="flex flex-col md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4">
            <Places
              setLocation={(position) => {
                setPickup(position)
                mapRef.current?.panTo(position)
              }}
              placeholder="Pick Up Location"
            />
            <Places
              setLocation={(position) => {
                setDropoff(position)
              }}
              placeholder="Drop Off Location"
            />
          </div>
          <button
            disabled={!pickup || !dropoff ? true : false}
            onClick={() => {
              fetchDirections()
            }}
            className={`mt-4 rounded-md md:mt-0 ${
              !pickup || !dropoff
                ? 'bg-slate-400'
                : 'bg-green-500 hover:bg-green-600'
            }  py-4 px-8 text-white `}
          >
            Calculate Cost
          </button>
        </div>
        {directions && (
          <div className="hidden px-4 pb-4 md:-mt-2 md:block">
            <Distance leg={directions.routes[0].legs[0]} />
          </div>
        )}
      </div>
      {/* COST ESTIMATE (MOBILE) */}
      {directions && (
        <div className="md:hidden">
          <Distance leg={directions.routes[0].legs[0]} />
        </div>
      )}
    </div>
  )
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
}

export default Map
