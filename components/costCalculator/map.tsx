import { useState, useMemo, useCallback, useRef } from 'react'
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api'
import Places from './places'
import Distance from './distance'

type LatLngLiteral = google.maps.LatLngLiteral
type DrectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

const Map = () => {
  const [office, setOffice] = useState<LatLngLiteral>()
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

  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-900 p-4">
        <h1>Controls</h1>
        <Places
          setOffice={(position) => {
            setOffice(position)
            mapRef.current?.panTo(position)
          }}
        />
      </div>
      <div className="h-screen w-4/5">
        <GoogleMap
          zoom={11}
          center={center}
          mapContainerClassName="map-container"
          options={options}
          onLoad={onLoad}
        >
          {office && <Marker position={office} />}
        </GoogleMap>
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
