import React, { useState } from 'react'

function PersonalDetails() {

    const initialState = {
        userName: "",
        userEmail: "",
        userWhatsappNumber: ""
    }

    const [formState, setFormState] = useState(initialState)

    return (
        <div className="py-24">
            <h1 className="font-bold text-3xl text-white">PERSONAL DETAILS</h1>
            <section className="bg-white shadow-xl w-11/12 md:w-1/2 m-auto grid place-items-center my-8">
                <form action="/questions" className="w-full p-4">
                    <div className="flex flex-col md:flex-row items-center py-2">
                        <label for="text" className="w-full md:w-2/6 text-left">Name<span className="text-red-600">*</span></label>
                        <input value={formState.userName} onChange={(e) => setFormState({ ...formState, userName: e.target.value })} className="w-full md:w-4/6 p-2 border-teal-600" type="text" id="text" name="text" required />
                    </div>
                    <div className="flex flex-col md:flex-row items-center py-2">
                        <label for="email" className="w-full md:w-2/6 text-left">Email<span className="text-red-600">*</span></label>
                        <input value={formState.userEmail} onChange={(e) => setFormState({ ...formState, userEmail: e.target.value })} className="w-full md:w-4/6 p-2 border-teal-600" type="email" id="email" name="email" required />
                    </div>
                    <div className="flex flex-col md:flex-row items-center py-2">
                        <label for="number" className="w-full md:w-2/6 text-left">Whatsapp number</label>
                        <input value={formState.userWhatsappNumber} onChange={(e) => setFormState({ ...formState, userWhatsappNumber: e.target.value })} className="w-full md:w-4/6 p-2 border-teal-600" type="text" id="number" />
                    </div>
                    <div className="py-2 text-right">
                        <button className="bg-teal-600 px-6 text-white py-2 mt-2 hover:bg-white next-btn border-teal-600" type="submit">NEXT</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default PersonalDetails
