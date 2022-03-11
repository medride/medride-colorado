import { useLoadScript } from '@react-google-maps/api'
import Map from '../components/costCalculator/map'

const privatePay = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDhE6cz4FicbrTp0U1EES44orYWKqEaOQU',
    libraries: ['places'],
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

export default privatePay
