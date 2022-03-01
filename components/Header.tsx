import { useState } from "react"
import Link from 'next/link'

const Header = () => {
    const [open, setOpen] = useState(false)

    const links = [
        {name: 'Home', link:'/'},
        {name: 'Schedule a Ride', link:'/'},
        {name: 'Service Areas', link:'/'},
        {name: 'Forms', link:'/'},
        {name: 'Employment', link:'/'},
        {name: 'Contact Us', link:'/'},
    ]

    return (
        <nav className="flex flex-col">
            <div className="flex justify-between px-8 py-6 items-center">
                {/* logo */}
                <img src="/medride-colorado-logo.png" className="pr-2"/>

                {/* Desktop menus */}
                <div className="hidden xl:flex space-x-8 items-center pr-2 xl:pr-10">
                    {/* primary nav */}
                    <div>
                        <ul className="uppercase space-x-6 2xl:pr-16 2xl:space-x-16 text-xl text-gray-700 font-medium"> 
                            {links.map((link)=>(
                                <Link key={link.name} href={link.link}>
                                    <a className="hover:text-orange-500 hover:underline hover:font-medium">{link.name}</a>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    {/* secondary nav would go here */}

                </div>

                {/* Hamburger */}
                <div className="xl:hidden cursor-pointer">
                    <button onClick={() => setOpen(!open)}>
                        {open 
                            ?   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            :   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                        }
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && 
                <div className="bg-orange-500 xl:hidden transition delay-300">
                    <ul className="uppercase px-8 py-2 text-lg text-gray-50 font-medium"> 
                        {links.map((link)=>(
                            <Link 
                                key={link.name} 
                                href={link.link}
                            >
                                <a className="block py-2 hover:text-gray-800 hover:underline hover:font-bold">{link.name}</a>
                            </Link>
                        ))}
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Header