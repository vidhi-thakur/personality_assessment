import React from 'react'
import { Link } from 'react-router-dom'

function PersonalDetails() {
    return (
        <div className="py-24">
            <h1 className="font-bold text-3xl text-white">PERSONAL DETAILS</h1>
            <section className="bg-white shadow-xl w-11/12 md:w-1/2 m-auto grid place-items-center my-8">
                <form className="w-full p-4">
                    <div className="flex flex-col md:flex-row items-center py-2">
                        <label className="w-full md:w-2/6 text-left">Name<span className="text-red-600">*</span></label>
                        <input required className="w-full md:w-4/6 p-2 border-teal-600" type="text" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center py-2">
                        <label className="w-full md:w-2/6 text-left">Email<span className="text-red-600">*</span></label>
                        <input required className="w-full md:w-4/6 p-2 border-teal-600" type="email" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center py-2">
                        <label className="w-full md:w-2/6 text-left">Whatsapp number</label>
                        <input className="w-full md:w-4/6 p-2 border-teal-600" type="text" />
                    </div>
                    <div className="py-2 text-right">
                        <Link to="/questions">
                            <button className="bg-teal-600 px-6 text-white py-2 mt-2 hover:bg-white btn border-teal-600" type="submit">NEXT</button>
                        </Link>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default PersonalDetails
