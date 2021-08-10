import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-white text-teal-600 fixed z-10 w-full">
            <div className="w-11/12 sm:w-9/12 flex item-center justify-between mx-auto py-4">
                <span className="text-lg">CAREER SELECT</span>
                <Link to="/personal_details">
                    <strong className="font-bold text-lg">Take the test</strong>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
