import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import VideoBackground from '../components/videoBackground'

const FaqSection = dynamic(() => import('../components/faqSection'))

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>MedRide NEMT Transportation | Colorado</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Get reliable non-emergency medical transportation with MedRide Colorado. Available 24/7 for Health First Colorado members without transportation. Hassle-free rides to your appointments, whenever you need them."
        />
      </Head>

      <div className="relative">
        <VideoBackground />
        {/* <div className="relative h-[75vh] w-full"> */}
        {/* <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={'/img/medride-hero.jpg'}
          alt="Image showing MedRide sedan and MedRide wheelchair-accessible van"
        /> */}
      </div>

      {/* SEPERATOR */}
      <div className="flex flex-col bg-orange-500 pt-6 pb-8 text-center text-2xl text-white">
        <p className="pb-4 italic  underline md:pb-2">Offering:</p>
        <div className="flex flex-col justify-evenly space-y-4 font-bold uppercase  md:flex-row md:space-y-0">
          <span>Doctors Appointments</span>
          <span>Urgent Care</span>
          <span>Specialty Appointments</span>
        </div>
      </div>

      <section className="mx-auto flex max-w-6xl flex-col space-x-0 py-16 px-10 md:px-20 lg:flex-row lg:space-x-14 xl:px-0">
        <div className="left-half flex-1">
          <h1 className="-mt-4 mb-4 font-medium text-gray-900">
            MedRide NEMT Transportation | Colorado
          </h1>
          <h2 className="mb-5 text-3xl font-extrabold text-orange-500 lg:text-4xl">
            Colorado Medicaid Transportation
          </h2>
          <p className="pb-6 text-2xl lg:text-xl">
            Non-Emergent Medical Transportation (NEMT) is transportation to and
            from covered non-emergency medical appointments or services, NEMT is
            only available when a Health First Colorado (Colorado’s Medicaid
            Program) member has no other means of transportation.
          </p>
          <ul className="list-disc text-2xl leading-9 lg:text-xl">
            <li className="pb-6">
              <span className="font-bold">
                For a client to be eligible for NEMT Services they must:
              </span>
              <ul className="ml-8 list-disc pt-6 lg:pt-3">
                <li className="pb-6 lg:pb-3">
                  Be a current Colorado Medicaid client
                </li>
                <li className="pb-6 lg:pb-3">
                  Be determined to not have access to other means of
                  transportation including free transportation
                </li>
                <li className="pb-6 lg:pb-3">
                  Require transportation to obtain a non-emergency Colorado
                  Medicaid covered service.
                </li>
                <li className="">
                  Not be within the following eligibility groups:
                  <ul className="ml-8 list-disc pt-6 text-xl text-orange-600 lg:pt-3 lg:text-xl">
                    <li className="pb-2">
                      Qualified Medicaid Beneficiary (QMB)
                    </li>
                    <li className="pb-2">
                      Special Low-Income Medicare Beneficiary (SLMB)
                    </li>
                    <li className="pb-2">
                      Medicare Qualifying Individual-1 (QI-1)
                    </li>
                    <li className="">
                      Old Age Pension- State Only (OAP-state only)
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <p className="pt-2 text-lg italic">
            <span className="font-bold">Note:</span> CHP+ is not a Medicaid
            program and, therefore, is not an eligibility group.
          </p>
        </div>
        <div className="right-half mt-16 flex flex-1 flex-col justify-center pt-4 lg:mt-0">
          <div className="md:hidden">
            <iframe
              className="mb-4 rounded-lg"
              width="320"
              height="180"
              src="https://www.youtube.com/embed/WMq8tH4QpA4?controls=0"
              title="YouTube video player"
              // @ts-ignore
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

            {/* <Image
              layout="intrinsic"
              height={576}
              width={1361}
              src="/img/medride-car.jpg"
              alt="Side-view of MedRide Colorado's NEMT vehicle"
            /> */}
          </div>
          <div className="hidden md:inline-block xl:hidden">
            <iframe
              className="mb-4 rounded-lg"
              width="390"
              height="219"
              src="https://www.youtube.com/embed/WMq8tH4QpA4?controls=0"
              title="YouTube video player"
              // @ts-ignore
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="hidden xl:inline-block">
            <iframe
              className="mb-4 rounded-lg"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WMq8tH4QpA4?controls=0"
              title="YouTube video player"
              // @ts-ignore
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h2 className="mb-5 text-3xl font-bold lg:text-3xl">
              Urgent Care Transportation
            </h2>
            <p className="pb-2 text-2xl">
              Urgent care transportation is permissible if…
            </p>
            <p className="pt-4 text-xl lg:pt-0">
              A client is in need of transportation outside of normal physician
              office hours to a care facility but is not in an emergency event.
              This facility may include a Trauma Center if this is the nearest
              and most appropriate facility.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />
    </div>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
