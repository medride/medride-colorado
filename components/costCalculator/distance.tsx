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
  console.log(typeof costTwoDecimals)

  console.log('Distance in kilometers:', leg.distance?.value)
  return (
    <div className="text-xl font-medium text-orange-500">
      {/* The code commented out below would show the route distance. I'm saving it incase we want to use it one day.
      <p>Route distance: {distanceInMiles.toFixed(2)} miles.</p> */}
      <p>
        Cost of trip: <span>$</span>
        <span>{new Intl.NumberFormat().format(costTwoDecimals)}</span>
      </p>
    </div>
  )
}

export default Distance
