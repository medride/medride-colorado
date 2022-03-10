import React from 'react'

const footer = () => {
  return (
    <div className="flex flex-col justify-around bg-gray-800 px-10 py-8 text-xl text-white md:flex-row">
      <div>
        <img src="/medride-colorado-logo.png" className="pr-2" />
      </div>
      <div>
        <p className="pb-2 font-medium uppercase underline">Hours</p>
        <p></p>
      </div>
      <div>
        <p className="pb-2 font-medium uppercase underline">Contact</p>
        <p>(719) 545-3333</p>
      </div>
      <div className="flex flex-col">
        <p className="pb-2 font-medium uppercase underline">Location</p>
        <p>267 S Joe Martinez Blvd</p>
        <p>Pueblo West, CO 81007</p>
      </div>
    </div>
  )
}

export default footer
