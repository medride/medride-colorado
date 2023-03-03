import React, { useState } from 'react'

export interface Props {
  question: string
  answer: string
}

const FaqBox = (props: Props) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="mx-auto mt-6 w-5/6 border border-gray-400 bg-white lg:w-7/12">
      <div className="pl-6 pt-3 pb-3">
        <div className="flex items-center justify-between">
          <div className="pb-3 text-2xl font-medium italic text-orange-800">
            <span className="">Q.</span>
            <h3 className="inline">{props.question}</h3>
          </div>
          <button
            aria-label="Show or hide FAQ"
            onClick={() => setVisible(!visible)}
          >
            {visible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-6 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-6 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        {visible && (
          <p className="text-lg transition-all duration-500">{props.answer}</p>
        )}
      </div>
    </div>
  )
}

export default FaqBox
