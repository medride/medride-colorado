import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api'
import { useCallback, useMemo } from 'react'

export default function GoogleMap({ mapRef }) {
    const center = useMemo(
        () => ({ lat: 38.8245043, lng: -104.8068821 }),
        []
    )

    const options = useMemo(
        () => ({
            mapId: 'd725b651261adacd',
            disableDefaultUI: true,
            clickableIcons: false,
        }),
        []
    )

    const onLoad = useCallback((map) => (mapRef.current = map), [])

    return (
        <div className="my-0 h-1/2 w-auto drop-shadow-xl md:order-2 md:mx-auto md:mt-20 md:mb-10 md:h-96 md:w-3/4">
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
    )
}