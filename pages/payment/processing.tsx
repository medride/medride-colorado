// DOCUMENTATION
// https://www.npmjs.com/package/react-square-web-payments-sdk

import Head from 'next/head'
import {
  CreditCardInput,
  SquarePaymentsForm,
} from 'react-square-web-payments-sdk'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useState } from 'react'
import Link from 'next/link'

const payments = () => {
  const [success, setSuccess] = useState(false)
  const priceUnformatted = useSelector((state: RootState) => state.cost.cost)
  const price = Math.round(priceUnformatted * 100)

  return (
    <div className="">
      <Head>
        <title>Process a payment for a one-way trip</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-orange-500">
        <h1 className="mb-8 py-4 text-center text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
          Process a payment
        </h1>
      </div>

      <main className="mx-auto flex h-screen w-11/12 flex-col md:w-2/3 md:flex-row ">
        <div className="mb-8 w-auto md:mb-0 md:w-1/2">
          <p className="text-3xl">
            The cost of this payment will be $<span>{price / 100}</span>
          </p>
        </div>
        <div className="flex w-auto flex-col md:w-72">
          <SquarePaymentsForm
            applicationId="sandbox-sq0idb-yfhXpa901vL4yCVYvI_U_g"
            locationId="LA4M70FQEE3YJ"
            cardTokenizeResponseReceived={async (token, buyer) => {
              const response = await fetch('/api/pay', {
                method: 'POST',
                headers: {
                  'Content-type': 'application/json',
                },
                body: JSON.stringify({
                  sourceId: token.token,
                  amount: price,
                }),
              })
              await response.json()
              setSuccess(true)
              // alert(JSON.stringify(await response.json(), null, 2))
            }}
          >
            <CreditCardInput />
          </SquarePaymentsForm>
          {success && (
            <>
              <p className="my-2 text-xl font-medium text-green-500">
                The payment was successfully completed.
              </p>
              <Link href="/payment">
                <a className="text-blue-500">
                  <p className="underline">
                    Click here to process another trip.
                  </p>
                </a>
              </Link>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default payments
