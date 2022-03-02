import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', link: '/' },
    { name: 'Schedule a Ride', link: '/schedule-a-ride' },
    { name: 'Service Areas', link: '/service-areas' },
    { name: 'Forms', link: '/forms' },
    { name: 'Employment', link: '/employment' },
    { name: 'Contact Us', link: '/contact-us' },
  ]

  return (
    <nav className="flex flex-col">
      <div className="flex items-center justify-between px-8 py-6">
        {/* logo */}
        <img src="/medride-colorado-logo.png" className="pr-2" />

        {/* Desktop menus */}
        <div className="hidden items-center space-x-8 pr-2 xl:flex xl:pr-10">
          {/* primary nav */}
          <div>
            <ul className="space-x-6 text-xl font-medium uppercase text-gray-700 2xl:space-x-16 2xl:pr-16">
              {links.map((link) => (
                <Link key={link.name} href={link.link}>
                  <a className="hover:font-medium hover:text-orange-500 hover:underline">
                    {link.name}
                  </a>
                </Link>
              ))}
            </ul>
          </div>

          {/* secondary nav would go here */}
        </div>

        {/* Hamburger */}
        <div className="cursor-pointer xl:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-2 h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mt-2 h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="bg-orange-500 transition delay-300 xl:hidden">
          <ul className="px-8 py-2 text-lg font-medium uppercase text-gray-50">
            {links.map((link) => (
              <Link key={link.name} href={link.link}>
                <a
                  className="block py-2 hover:font-bold hover:text-gray-800 hover:underline"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
