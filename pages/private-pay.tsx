import { useLoadScript } from '@react-google-maps/api'
import Map from '../components/costCalculator/map'

const privatePay = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDhE6cz4FicbrTp0U1EES44orYWKqEaOQU',
    libraries: ['places'],
  })

  if (!isLoaded) return <div>Loading...</div>
  return (
    <div>
      <Map />
      <section className="mx-auto w-3/4 text-gray-700">
        <div className="flex pb-8">
          <div className="w-3/5">
            <h1 className="pb-8 text-5xl font-light text-gray-400">
              Wheelchair-Accessible{' '}
              <span className="font-medium text-orange-500">
                Transportation
              </span>
            </h1>
            <p className="w-3/4 pb-6 text-3xl">
              With our Non-Emergency Medical Transportation service, you'll be
              able to get where you need comfortably and confidently.
            </p>
            <p className="w-3/4 pb-6 text-2xl">
              Our vehicles are fully functional with wheelchair lifts/ramps, as
              well as safety straps. You'll travel with peace of mind knowing
              our drivers excellently trained in order to keep you safe.
            </p>
          </div>
          <div className="w-2/5 bg-[url('/img/wheelchair-transportation-colorado.jpg')] bg-contain bg-no-repeat">
            {/* <img
              src="/img/wheelchair-transportation-colorado.jpg"
              className="h-96 justify-start"
            /> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default privatePay
