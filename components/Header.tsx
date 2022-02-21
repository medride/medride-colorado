import { useState } from "react"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => setIsOpen(!isOpen)

    return (
        <header className="">
            {/* TODO:  
                    1) Stylize desktop navigation
                    2) Stylize mobile navigation    
            */}
            <nav className="flex lg:flex-col">
                <img 
                    src="https://www.medridecolorado.com/wp-content/uploads/2021/12/Logo.png" 
                    alt="MedRide Colorado Logo" 
                    className="w-56 lg:w-72 object-contain"
                />
                {/* Desktop menu */}
                <ul className="hidden lg:flex">
                    <li className="hover:text-orange-500"><a href="">Home</a></li>
                    <li><a href="">Schedule a Ride</a></li>
                    <li><a href="">Service Area</a></li>
                    <li><a href="">Forms</a></li>
                    <li><a href="">Employment</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>

                {/* Mobile menu */}
                <div className="lg:hidden">
                    <button onClick={handleClick}>
                        <svg
                            xmlns="<http://www.w3.org/2000/svg>"
                            id="menu-button"
                            className="h-6 w-6 cursor-pointer lg:hidden block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    {isOpen && 
                        <ul>
                            <li className="hover:text-orange-500"><a href="">Home</a></li>
                            <li><a href="">Schedule a Ride</a></li>
                            <li><a href="">Service Area</a></li>
                            <li><a href="">Forms</a></li>
                            <li><a href="">Employment</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header