// PRICING
// $50 Load Fee
// $4.00 per mile after 15 miles
// const cost = 50 +

type DistanceProps = {
  leg: google.maps.DirectionsLeg
}

const Distance = ({ leg }: DistanceProps) => {
  if (!leg.distance || !leg.duration) return null

  const distanceInMiles = (leg.distance?.value / 1000) * 0.6214
  const cost = distanceInMiles > 15 ? 50 + (distanceInMiles - 15) * 4 : 50
  const costTwoDecimals = +cost.toFixed(2)

  return (
    <div className="text-2xl font-medium text-orange-500">
      {/* The code commented out below would show the route distance. I'm saving it incase we want to use it one day.
      <p>Route distance: {distanceInMiles.toFixed(2)} miles.</p> */}
      <p className="inline-block w-full bg-orange-500 px-2 py-2 text-center text-white md:w-auto md:bg-white md:p-0 md:text-left md:text-black">
        Estimated cost of a one-way trip: <span>$</span>
        <span>{new Intl.NumberFormat().format(costTwoDecimals)}</span>
      </p>

      {/* CALL TO ACTION (TABLET & DESKTOP) */}
      <p className="hidden lg:inline-block">
        {' '}
        &nbsp; | &nbsp; Call &nbsp;
        <a
          href="tel:7195453333"
          className=" text-blue-500 underline hover:text-black"
        >
          (719) 545-3333
        </a>{' '}
        to schedule your trip
      </p>

      {/* CALL TO ACTION (MOBILE) */}
      <p className="px-4 pt-4 text-center text-2xl font-normal italic  text-black md:px-0 md:text-left lg:hidden">
        {' '}
        Call&nbsp;
        <a
          href="tel:7195453333"
          className="text-orange-500 underline hover:text-black"
        >
          (719) 545-3333
        </a>{' '}
        to schedule your trip
      </p>
    </div>
  )
}

export default Distance
