import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useLoadScript } from '@react-google-maps/api'
import Map from '../../components/costCalculator/map'

const LowerContent = dynamic(() => import('./dynamic-import'))

const privatePay = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDhE6cz4FicbrTp0U1EES44orYWKqEaOQU',
    libraries: ['places'],
  })

  if (!isLoaded) return <div>Loading...</div>
  return (
    <div>
      <Head>
        <title>Private Pay Wheelchair Transport in Colorado</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Map />
      <section className="mx-auto -mt-28 mb-10 w-auto px-8 text-gray-700 md:mt-0 md:w-3/4 md:px-0">
        <div className="flex flex-col md:pb-10 lg:flex-row lg:space-x-6 lg:pb-16">
          <div className="w-auto lg:w-3/5">
            <h1 className="pb-8 text-5xl font-light text-gray-400">
              Wheelchair-Accessible{' '}
              <span className="font-medium text-orange-500">
                Transportation
              </span>
            </h1>
            <p className="w-11/12 pb-6  lg:w-3/4 xl:text-2xl 2xl:text-3xl">
              With our Non-Emergency Medical Transportation service, you'll be
              able to get where you need comfortably and confidently.
            </p>
            <p className="w-11/12 pb-6 text-xl lg:w-3/4 xl:text-xl 2xl:text-2xl">
              Our vehicles are fully functional with wheelchair lifts/ramps, as
              well as safety straps. You'll travel with peace of mind knowing
              our drivers excellently trained in order to keep you safe.
            </p>
          </div>
          <div className="h-80 w-auto bg-[url('/img/wheelchair-transportation-colorado.jpg')] bg-contain bg-no-repeat md:mt-12 lg:mt-12 lg:h-auto lg:w-2/5 2xl:mt-0">
            {/* <img
              src="/img/wheelchair-transportation-colorado.jpg"
              className="h-96 justify-start"
            /> */}
          </div>
        </div>
      </section>
      <LowerContent />
    </div>
  )
}

export default privatePay

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
