import React from 'react'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <div className="w-9/12 flex item-center justify-between mx-auto py-4">
                <span>Career Select</span>
                <Link to="/personal_details">
                    <strong>Take the test</strong>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
