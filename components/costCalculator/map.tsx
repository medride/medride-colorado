import { useState, useMemo, useCallback, useRef } from 'react'
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api'
import Places from './places'
import Distance from './distance'

type LatLngLiteral = google.maps.LatLngLiteral
type DrectionsResult = google.maps.DirectionsResult
type MapOptions = google.maps.MapOptions

const Map = () => {
  const center = useMemo(() => ({ lat: 43, lng: -80 }), [])
  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-900 p-4">
        <h1>Controls</h1>
      </div>
      <div className="h-screen w-4/5">
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        />
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
