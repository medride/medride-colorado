import dynamic from 'next/dynamic'
import Navbar from './navbar'
// import Footer from './footer'

const Footer = dynamic(() => import('./footer'))

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
