import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-white text-teal-600 fixed z-10 w-full shadow-md">
            <div className="w-11/12 sm:w-9/12 flex item-center justify-between mx-auto py-4">
                <Link to="/">
                    <span className="text-lg">CAREER SELECT</span>
                </Link>
                <Link to="/sample_report">
                    <strong className="font-bold text-lg">Take the test</strong>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
