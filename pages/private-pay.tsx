import Head from 'next/head'
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
      <section className="bg-gray-50 pt-16 pb-10">
        <div className="mx-auto w-auto pb-8 text-gray-700 md:w-3/4">
          <div className="flex flex-col lg:flex-row lg:space-x-24">
            <div className="w-auto pb-8 lg:w-2/5 lg:pb-0">
              <div className="border bg-white">
                <div className="p-8">
                  <p className=" text-5xl font-medium text-orange-500">
                    Schedule a Ride
                  </p>
                  <p className="pb-4 text-3xl font-light text-gray-400">
                    Get a Quote
                  </p>
                  <p className="pb-2 text-xl font-medium text-gray-900">
                    Call us at (719) 545-3333
                  </p>
                  <p className="pb-2">
                    Our office is open:
                    <br />
                    <span className="font-medium">
                      Monday - Friday | 6AM - 7PM
                    </span>
                  </p>
                  <p className="pb-2 font-medium text-orange-900">
                    Rides are available 24/7
                  </p>
                  <p className="italic">
                    *Please schedule 24-48 hours in advance. We will try to
                    accomodate short-notice requests, but we cannot make any
                    guarantee of transport.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="contractFacilityAgreements"
              className="w-auto px-8 lg:w-3/5 lg:px-0"
            >
              <h2 className="py-8 text-5xl font-medium text-orange-500">
                <span className="font-light text-gray-400">Contract/</span>
                Facility-Based Agreements
              </h2>
              <div id="ratesAndDrivers" className="text-lg ">
                <p className="w-auto pb-6 lg:w-11/12">
                  All contracted rates are negotiated with providers and
                  facilities on as as needed basis. Please contact{' '}
                  <a
                    href="mailto:info@medrideco.com"
                    className="text-blue-500 underline hover:text-blue-600"
                  >
                    info@medrideco.com
                  </a>
                  .
                </p>
                <p className="w-auto lg:w-11/12 ">
                  It is the duty of drivers at MedRide to be compassionate,
                  caring, reliable and responsible individuals. Our drivers are
                  required to transport clients with mobility challenges to
                  their destinations safely and on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="missionAndPDF mx-auto flex w-auto flex-col space-x-4 pb-8 text-gray-700 md:w-3/4 xl:flex-row">
        <div
          id="missionAndqualities"
          className="lg:2/3 w-auto px-8 lg:px-0 xl:w-3/5"
        >
          <h2 className="py-8 text-5xl font-medium text-orange-500">
            MedRide's Qualities{' '}
            <span className="font-light text-gray-400">and Mission</span>
          </h2>
          <div id="qualitiesMobile" className="flex flex-col pb-8 md:hidden">
            <div className="flex items-center space-x-2 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xl">Safety</p>
            </div>
            <div className="flex items-center space-x-2 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xl">Empathy</p>
            </div>
            <div className="flex items-center space-x-2 pb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xl">Reliability</p>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-xl">Timeliness</p>
            </div>
          </div>
          <div
            id="qualitiesTabletAndLarger"
            className="hidden w-4/5 justify-around pl-2 pb-8 font-medium text-orange-800 md:flex"
          >
            <p className="text-xl">Safety</p>
            <p>|</p>
            <p className="text-xl">Empathy</p>
            <p>|</p>
            <p className="text-xl">Reliability</p>
            <p>|</p>
            <p className="text-xl">Timeliness</p>
          </div>
          <div id="mission" className="pb-8 text-lg ">
            <p className="w-auto pb-6 lg:w-11/12">
              We are determined to help you get to and from your medical
              appointments in a safe and timely manner. We strive to provide an
              unequaled customer service experience that will leave you with a
              smile on your face.{' '}
            </p>
            <p className="w-auto lg:w-11/12 ">
              By building long-lasting relationships with people like you, as
              well as local medical professionals, we aim to make a positive
              difference in our communities.
            </p>
          </div>
        </div>
        <div className="pdfBrochure px-8 md:py-8 lg:px-0">
          <h2 className="pb-10 text-5xl font-medium text-orange-500 xl:text-center xl:font-light">
            Download Our Brochure
          </h2>
          <a href="/docs/MedRide-Trifold-Brochure.pdf" target="_blank">
            <img src="/img/pdf-icon.png" className="h-32 xl:mx-auto xl:h-40" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default privatePay

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
