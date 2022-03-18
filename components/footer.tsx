import React from 'react'

const footer = () => {
  return (
    <div className="flex flex-col justify-around space-y-10 bg-gray-800 px-10 py-8 text-xl text-white xl:flex-row md:space-y-0">
      <div>
        <img src="/medride-colorado-logo.svg" className="h-10 pr-2 md:h-14" />
      </div>
      <div>
        <p className="mb-2 pb-2 font-medium uppercase">Contact Us</p>
        <div className="phone flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p className="pl-4 text-lg text-gray-300">
            <a href="tel:7195453333">(719) 545-3333</a>
          </p>
        </div>
        <div className="mt-2 flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div className="pl-4 text-lg text-gray-300">
            <a href="https://goo.gl/maps/9LLCatqcSm2zRLmJ8" target="_blank">
              <p>267 S Joe Martinez Blvd</p>
              <p>Pueblo West, CO 81007</p>
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-2 pb-2 font-medium uppercase">Office Hours</p>
        <div className="flex flex-col text-lg ">
          <div className="flex justify-between">
            <p className="text-gray-300">Monday</p>
            <p>6AM-7PM</p>
          </div>
          <div className="flex justify-between space-x-20">
            <p className="text-gray-300">Tuesday</p>
            <p>6AM-7PM</p>
          </div>
          <div className="flex justify-between space-x-20">
            <p className="text-gray-300">Wednesday</p>
            <p>6AM-7PM</p>
          </div>
          <div className="flex justify-between space-x-20">
            <p className="text-gray-300">Thursday</p>
            <p>6AM-7PM</p>
          </div>
          <div className="flex justify-between space-x-20">
            <p className="text-gray-300">Friday</p>
            <p>6AM-7PM</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/4">
        <p className="mb-2 pb-2 font-medium uppercase">
          24 Hour Transportation
        </p>
        <p className="">
          With MedRide you can get where you need, whenever you need. Operating
          all day, every day.
        </p>
      </div>
    </div>
  )
}

export default footer
