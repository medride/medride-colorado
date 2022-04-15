import Head from 'next/head'

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
      <div className="bg-[url('/img/background-decorator2.png')] pb-6 lg:pb-14 xl:h-75vh ">
        <div className="mx-auto flex w-3/4 flex-col justify-between pt-10 lg:max-w-6xl lg:flex-row lg:space-x-16 lg:pt-16">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="pb-4 text-2xl font-medium text-gray-800 underline">
              Open Positions
            </h2>
            <p className="pb-4 text-xl leading-relaxed">
              We are currently recruiting for fulltime hourly positions in the
              Colorado area of Crowley, Bent, Prowers, Mesa, Gunnison, Garfield,
              El Paso, Fremont, Otero, Las Animas, and Huerfano Counties.
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
  )
}

export default employment
