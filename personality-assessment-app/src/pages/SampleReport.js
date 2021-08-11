import React from 'react'
import logo from "../images/report.png"
import { Link } from "react-router-dom"

function SampleReport() {
    return (
        <div className="py-24">
            <h1 className="font-bold text-3xl text-white">SAMPLE REPORT</h1>
            <section className="bg-white shadow-xl w-11/12 md:w-1/2 m-auto grid place-items-center my-8">
                <form className="w-full p-4">
                    <img className="w-full" src={logo} alt="sample report" />
                </form>
                <div className="py-2 text-right">
                    <Link to="personal_details">
                        <button className="bg-teal-600 px-6 text-white py-2 mt-2 hover:bg-white next-btn border-teal-600" type="submit">NEXT</button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default SampleReport
