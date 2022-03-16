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

  console.log('Distance in kilometers:', leg.distance?.value)
  return (
    <div className="text-xl text-white">
      <p>Route distance: {distanceInMiles.toFixed(2)} miles.</p>
      <p>
        Cost of trip: <span>{new Intl.NumberFormat().format(cost)}</span>
      </p>
    </div>
  )
}

export default Distance
