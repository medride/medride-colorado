import React from 'react'

export default function Separator({ children }) {
  return (
    <div className="flex flex-col items-center bg-gradient-to-tr from-orange-300 to-orange-500 pt-6 pb-8 text-center text-2xl text-white">
      {/* <p className="pb-4 italic  underline md:pb-2">Offering:</p> */}
      {/* <div className="flex flex-col justify-evenly space-y-4 font-bold uppercase  md:flex-row md:space-y-0"> */}
      {children}
      {/* </div> */}
    </div>
  )
}
