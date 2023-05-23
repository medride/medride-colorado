import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useLoadScript } from '@react-google-maps/api'
import Map from '../../components/costCalculator/map'

const LowerContent = dynamic(() => import('./dynamic-import'))
const Separator = dynamic(() => import('../../components/separator'))

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
        <meta
          name="description"
          content="Choose MedRide's Non-Emergency Medical Transportation for hassle-free, comfortable private pay transportation. Get where you need to go with confidence."
        />
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
          <div className="h-80 w-auto bg-[url('/img/medride-colorado-private-pay.jpg')] bg-contain bg-no-repeat md:mt-12 lg:mt-12 lg:h-auto lg:w-2/5 2xl:mt-0"></div>
          {/* TESTIMONIAL */}
          {/* It is such a relief not to worry about how I am going to get to my appointments. The drivers have always been nice and helpful. */}
        </div>
      </section>
      <Separator>
        {/* <figure className="flex flex-col items-center">
          <blockquote className="w-3/4 text-center text-xl font-semibold italic leading-8 sm:text-2xl sm:leading-9">
            <p>
              "It is such a relief not to worry about how I am going to get to
              my appointments. The drivers have always been nice and helpful."
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="t font-semibold text-white">Judith Black</div>
            </div>
          </figcaption>
        </figure> */}
        <figure className="grid w-3/4 grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
          <div className="relative col-span-2 lg:col-start-1 lg:row-start-2">
            <blockquote className="text-xl font-semibold italic leading-8 text-white sm:text-2xl sm:leading-9">
              <p>
                "It is such a relief not to worry about how I am going to get to
                my appointments. The drivers have always been nice and helpful."
              </p>
            </blockquote>
          </div>
          <div className="col-end-1 hidden w-32 rounded-xl border-4 border-white lg:row-span-4 lg:inline-block lg:w-72 lg:rounded-3xl">
            <img
              className="-scale-x-100 transform rounded-xl bg-indigo-50 lg:rounded-3xl"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <figcaption className="flex items-center justify-center text-base lg:col-start-1 lg:row-start-3">
            <img
              className="mr-4 inline-flex w-16 -scale-x-100 transform rounded-xl bg-indigo-50 lg:hidden lg:rounded-3xl"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <div className="font-bold text-white">- Judith Black</div>
          </figcaption>
        </figure>
      </Separator>
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
