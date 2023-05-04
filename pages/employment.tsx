import Head from 'next/head'
import Image from 'next/image'

const employment = () => {
  return (
    <div>
      <Head>
        <title>Employment Opportunities - MedRide Colorado</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-orange-500">
        <h1 className="py-4 text-center text-4xl font-bold uppercase tracking-wide text-white">
          Employment
        </h1>
      </div>
      <div className="bg-[url('/img/background-decorator2.png')]">
        <div className="mx-auto max-w-screen-xl items-center gap-16 py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-700 dark:text-gray-400 sm:text-lg">
            <h2 className="text-secondary -mt-4 mb-4 font-medium">
              MedRide Careers
            </h2>
            <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Discover a Rewarding Career in Patient Care with MedRide!
            </h3>
            <p className="mb-4">
              At MedRide, we take pride in being more than just a transportation
              provider. Our team is made up of passionate individuals who are
              committed to delivering exceptional medical transportation
              services to various communities across Colorado. Our mission of
              advocating for patients and providing compassionate care is upheld
              by each member of our team, be it an EMT, paramedic, dispatcher or
              administrative professional. We invite you to explore the diverse
              range of career opportunities available with us and be a part of
              our efforts in making a positive impact on the lives of those we
              serve.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <Image
                className="w-full rounded-lg"
                src="/img/medride-colorado-employment.jpg"
                alt="MedRide employee in office"
                width={533}
                height={800}
              />
            </div>
            <div className="py-10">
              <Image
                className="w-full rounded-lg"
                src="/img/medride-colorado-careers.jpg"
                alt="MedRide vehicle driving through the mountains"
                width={533}
                height={800}
              />
            </div>
          </div>
        </div>
        <div className="pb-6 lg:pb-14 ">
          <div className="mx-auto flex w-3/4 flex-col justify-between pt-10 lg:max-w-6xl lg:flex-row lg:space-x-16 lg:pt-16">
            {/* Left Column */}
            <div className="flex-1">
              <h2 className="pb-4 text-2xl font-medium text-gray-800 underline">
                Open Positions
              </h2>
              <p className="pb-4 text-xl leading-relaxed">
                We are currently recruiting for fulltime hourly positions in the
                Colorado area of Crowley, Bent, Prowers, Mesa, Gunnison,
                Garfield, El Paso, Fremont, Otero, Las Animas, and Huerfano
                Counties.
              </p>
              <ul className="list-inside list-disc text-xl">
                <li className="pb-2">
                  <a
                    href="/docs/Non-Emergency-Driver-Job-Description.pdf"
                    className="font-bold text-sky-500 hover:text-sky-400"
                    target="_blank"
                  >
                    Non-Emergency Medical Driver Job Description
                  </a>
                </li>
                <li>
                  <a
                    href="/docs/Customer-Service-Representative-Job-Description.pdf"
                    className="font-bold text-sky-500 hover:text-sky-400"
                    target="_blank"
                  >
                    Customer Service Representative Job Description
                  </a>
                </li>
              </ul>
            </div>

            {/* Center Column */}
            <div className="flex-1 pt-14 lg:pt-0">
              <h2 className="pb-4 text-2xl font-medium text-gray-800 underline">
                How to Apply
              </h2>
              <p className="pb-4 text-xl leading-relaxed">
                Qualified and interested applicants must complete MedRide’s
                employment application and submit it via email to
                <a
                  href="mailto:medridepueblohr@gmail.com"
                  className="font-bold text-sky-500 hover:text-sky-400"
                >
                  &nbsp; medridepueblohr@gmail.com
                </a>
                .
              </p>
              {/* <hr className="w-60 pb-4" /> */}
              <ul className="list-inside list-disc text-xl">
                <li className="pb-2">
                  <a
                    href="/docs/Driver-Employment-Application.pdf"
                    className="font-bold text-sky-500 hover:text-sky-400"
                    target="_blank"
                  >
                    Download Application
                  </a>
                </li>
                <li>
                  <a
                    href="https://medride-llc.prismhr-hire.com/"
                    className="font-bold text-sky-500 hover:text-sky-400"
                    target="_blank"
                  >
                    Apply Now
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="flex-1 pb-4  pt-14 lg:pt-0">
              <h2 className="pb-4 text-2xl font-medium text-gray-800 underline">
                Company Ethos
              </h2>
              <p className="text-xl leading-relaxed">
                It is the duty of drivers at MedRide, LLC to be compassionate,
                caring, reliable and responsible individuals. Our drivers are
                required to transport clients with mobility challenges to their
                destinations safely and on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default employment

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
