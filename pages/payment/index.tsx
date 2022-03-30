import { useLoadScript } from '@react-google-maps/api'
import EmployeeMap from '../../components/costCalculator/employeeMap'

const payment = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDhE6cz4FicbrTp0U1EES44orYWKqEaOQU',
    libraries: ['places'],
  })

  if (!isLoaded) return <div>Loading...</div>
  return <EmployeeMap />
}

export default payment
