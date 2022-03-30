// PRICING
// $50 Load Fee
// $4.00 per mile after 15 miles
// const cost = 50 +

import { useMemo } from 'react'
import { RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { setCost } from '../../redux/cost/costSlice'
import Link from 'next/link'

type DistanceProps = {
  leg: google.maps.DirectionsLeg
}

const EmployeeDistance = ({ leg }: DistanceProps) => {
  if (!leg.distance || !leg.duration) return null

  const distanceInMiles = (leg.distance?.value / 1000) * 0.6214
  const cost = distanceInMiles > 15 ? 50 + (distanceInMiles - 15) * 4 : 50
  const costTwoDecimals = +cost.toFixed(2)

  const dispatch = useDispatch()
  const settingCostInState = useMemo(
    () => dispatch(setCost(costTwoDecimals)),
    [cost]
  )

  const checkingCost = useSelector((state: RootState) => state.cost.cost)
  // console.log(checkingCost)

  // BUG?
  // when this console.log is turned on, you will see the cost logged multiple times.
  // - What is the issue?
  // - Can this be optimized?

  return (
    <div className="flex flex-col space-y-4 text-2xl font-medium text-orange-500 md:flex-row md:space-x-4 md:space-y-0">
      {/* The code commented out below would show the route distance. I'm saving it incase we want to use it one day.
      <p>Route distance: {distanceInMiles.toFixed(2)} miles.</p> */}
      <p className="inline-block w-full bg-orange-500 px-2 py-2 text-center text-white md:w-auto md:bg-white md:p-0 md:text-left md:text-black">
        Cost of a one-way trip: <span>$</span>
        <span>{new Intl.NumberFormat().format(costTwoDecimals)}</span>
      </p>
      <div className="mx-auto">
        <Link href="/payment/processing">
          <a className="border py-2 px-8 font-semibold text-green-500 hover:bg-gray-300">
            Process Payment
          </a>
        </Link>
      </div>
    </div>
  )
}

export default EmployeeDistance
