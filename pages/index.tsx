import Head from 'next/head'
import FaqBox from '../components/faqBox'

export default function Home() {
  const smallHero = '/img/medride-hero-mobile.jpg'
  const mediumHero = '/img/medride-hero-medium.jpg'
  const largeHero = '/img/medride-hero.jpg'

  return (
    <div className="">
      <Head>
        <title>MedRide NEMT Transportation | Colorado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Image */}
      <picture>
        <source srcSet={smallHero} media="(max-width: 500px)" />{' '}
        {/* Mobile-first render */}
        <source srcSet={mediumHero} media="(max-width: 700px)" />{' '}
        {/* Large Mobile render */}
        <img srcSet={largeHero} /> {/* Desktop render */}
      </picture>

      {/* SEPERATOR */}
      {/* <div className='w-full overflow-hidden h-48 bg-orange-400 rounded-full '>
        <svg className='fill-current text-orange-300' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <p>Hello</p>
          <path d="M0 0v7.23c0 58.29 268.63 105.54 600 105.54s600-47.25 600-105.54V0Z" />
        </svg>
      </div> */}

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
        <div className="right-half mt-16 flex-1 pt-4 lg:mt-0">
          <img src="/img/medride-car.jpg" alt="" />
          <h2 className="mb-5 text-3xl font-bold lg:text-3xl">
            Urgent Care Transportation
          </h2>
          <p className="pb-2 text-2xl">
            Urgent care transportation is permissible if…
          </p>
          <p className="pt-4 text-xl lg:pt-0">
            A client is in need of transportation outside of normal physician
            office hours to a care facility but is not in an emergency event.
            This facility may include a Trauma Center if this is the nearest and
            most appropriate facility.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="h-3/4 bg-[url('/img/background-decorator.jpg')] pb-20">
        <h2 className="px-4 pt-20 pb-10 text-center text-3xl lg:px-0">
          Frequently Asked Questions
        </h2>
        <FaqBox
          question="What are the hours of operation?"
          answer="Our office and scheduling hours are Monday – Friday 6:00am –
              7:00pm. Transportation hours are 24/7"
        />
        <FaqBox
          question="Is there a limit on NEMT?"
          answer="There is no limit to the number of daily trips an eligible member
            can receive from MedRide."
        />
        <FaqBox
          question="Where can a member be transported using NEMT?"
          answer="NEMT can only be provided to services covered by Health First
            Colorado. NEMT is not available for picking up prescriptions,
            picking up medical equipment, completing interviews or paperwork."
        />
      </section>
    </div>
  )
}
