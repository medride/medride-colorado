import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>MedRide Medicaid Transportation | Pueblo Colorado | Southern Colorado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>
      <div className='h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-4xl font-display'>
        <p>Creating a NavBar</p>
      </div>
    </div>
  )
}
