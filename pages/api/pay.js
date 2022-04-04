// DOCUMENTATION
// https://www.npmjs.com/package/square

import { Client, PaymentsApi } from "square"
import { randomUUID } from 'crypto'
import { useSelector } from 'react-redux'
BigInt.prototype.toJSON = function () { return this.toString() }

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: 'sandbox'
})

// const price = 200

const handler = async (req, res) => {
  // const priceUnformatted = useSelector((state) => state.cost.cost)
  // const priceRounded = Math.round(priceUnformatted * 100)
  // const price = +priceRounded

  if (req.method === 'POST') {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: 'USD',
        amount: req.body.amount
      }
    })
    console.log(result)
    res.status(200).json(result)
  } else {
    console.log(result)
    res.status(500).send()
  }
}

export default handler