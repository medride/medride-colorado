import Head from 'next/head'
import React from 'react'

function ScheduleARide() {
  return (
    <div>
      <Head>
        <title>
          Schedule a Ride - Colorado Medicaid Non-Emergency Medical Transport -
          MedRide
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-orange-500">
        <h1 className="py-4 text-center text-4xl font-bold uppercase tracking-wide text-white">
          Schedule A Ride
        </h1>
      </div>
      <div className="bg-[url('/img/background-decorator2.png')] pb-4 lg:h-screen">
        <div className="mx-auto flex w-3/4 flex-col xl:w-5/12">
          <p className="pt-10 pb-8 text-center text-xl font-bold lg:pt-16 lg:text-3xl">
            PLEASE CONTACT MEDRIDE TRANSPORTATION TO SCHEDULE A RIDE. FOR ANY
            ADDITIONAL QUESTIONS YOU CAN CONTACT US AT:
          </p>
          <p className="pb-6 text-4xl font-bold text-orange-500 lg:pb-4">
            MedRide (719) 545-3333
          </p>
          <p className="pb-6 text-xl lg:pb-4">
            MedRide requires <span className="font-bold">24-48</span> hours
            advance notice to schedule your medical transportation. We will do
            our very best to accommodate same day call in’s, but we cannot
            guarantee we will be able to transport.
          </p>
          <p className="text-xl">
            To schedule your service, please have the following information
            ready:
          </p>
          <ul className="list-disc pl-2">
            <li className="pb-4 pt-6 lg:pb-2 lg:pt-4">
              Your{' '}
              <span className="font-bold">
                Health First Colorado ID (Medicaid ID)
              </span>{' '}
              number, name, and date of birth.
            </li>
            <li className="pb-4 lg:pb-2">
              The <span className="font-bold">pickup address</span> of where we
              will be picking you up.
            </li>
            <li className="pb-4 lg:pb-2">
              The <span className="font-bold">doctor’s name</span> and{' '}
              <span className="font-bold">address</span> as well as a{' '}
              <span className="font-bold">telephone number</span> for
              confirmation of your appointment.
            </li>
            <li>The date and time of your medical appointment.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ScheduleARide
