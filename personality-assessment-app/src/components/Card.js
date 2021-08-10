import React from 'react'

function Card({ img, title, content }) {
    return (
        <div className="w-64 my-6 p-2 h-64 bg-white shadow-md grid place-items-center">
            <div className="flex flex-col justify-evenly h-full">
                <img className="h-24" src={img} alt={`${title}-img`} />
                <h1 className="font-bold text-xl">{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Card
