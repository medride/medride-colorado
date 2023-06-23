import Image from 'next/image'

export default function LowerContent() {
  return (
    <>
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
                    <br />
                    <span className="font-medium">
                      Saturday - Sunday | 6AM - 5PM
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
        <div className="pdfBrochure relative px-8 md:py-8 lg:px-0">
          <h2 className="pb-10 text-5xl font-medium text-orange-500 xl:text-center xl:font-light">
            Download Our Brochure
          </h2>
          <div className="relative flex h-36 w-36 items-center justify-center xl:mx-auto xl:h-40">
            <a href="/docs/MedRide-Trifold-Brochure.pdf" target="_blank">
              <Image
                src="/img/pdf-icon.png"
                className=""
                layout="fill"
                alt="Icon for PDF brochure"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
