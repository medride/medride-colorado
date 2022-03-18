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
    <div className="flex h-screen flex-col">
      <div className="h-2/5 w-auto">
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
      <div className="h-1/2 bg-white p-4">
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
        {directions && <Distance leg={directions.routes[0].legs[0]} />}
        <button
          disabled={!pickup || !dropoff ? true : false}
          onClick={() => {
            fetchDirections()
            console.log('button clicked')
          }}
          className={`mt-4 rounded-md ${
            !pickup || !dropoff
              ? 'bg-slate-400'
              : 'bg-green-500 hover:bg-green-600'
          }  py-4 px-8 text-white `}
        >
          Calculate Cost
        </button>
      </div>
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
