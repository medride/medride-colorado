import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

function ScheduleARide() {
  return (
    <div>
      <Head>
        <title>
          Schedule a Ride - Colorado Medicaid Non-Emergency Medical Transport
          (NEMT) - MedRide
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-orange-500">
        <h1 className="py-4 text-center text-4xl font-bold uppercase tracking-wide text-white">
          Schedule A Ride
        </h1>
      </div>
      <div className="min-h-screen bg-[url('/img/background-decorator2.png')] md:min-h-full ">
        <div className="mx-auto flex w-3/4 flex-col items-center justify-center gap-8 pt-10 pb-8 md:flex-row md:gap-16 lg:pt-16">
          <p className="order-2 w-full text-4xl font-bold tracking-tight text-gray-700 dark:text-white md:order-1 md:w-1/2">
            Pleae contact MedRide transportation to schedule a ride. For any
            additional questions you can contact us at:
          </p>
          <div className="order-1 w-full md:order-2 md:w-3/4">
            <Image
              src="/img/medride-colorado-vehicle-red-rocks.jpg"
              alt="MedRide vehicle driving through the mountains"
              width={450}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mx-auto flex w-3/4 flex-col pb-6 xl:w-5/12">
          <p className="pb-4 text-4xl font-bold text-orange-500">
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
          <ul className="list-disc pl-2 pb-10">
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

export async function getStaticProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
