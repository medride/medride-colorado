import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  const smallHero = '/img/medride-hero-mobile.jpg'
  const mediumHero = '/img/medride-hero-medium.jpg'
  const largeHero = '/img/medride-hero.jpg'

  return (
    <div className="">
      <Head>
        <title>MedRide Medicaid Transportation | Pueblo Colorado | Southern Colorado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      {/* Hero Image */}
      <picture>
        <source srcSet={smallHero} media="(max-width: 500px)"/> {/* Mobile-first render */}
        <source srcSet={mediumHero} media="(max-width: 700px)"/> {/* Large Mobile render */}
        <img srcSet={largeHero} /> {/* Desktop render */}
      </picture>
    </div>
  )
}
