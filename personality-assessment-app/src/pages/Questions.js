import React, { useState, useEffect } from 'react'

function Questions() {
    const [array, setArray] = useState([])
    const url = "https://personalitytest.herokuapp.com/api/v1/questions";

    useEffect(() => {
        console.log("inside useeffect")
        fetch(url).then(response => response.json()).then(result => result.map(item => setArray(arr => [...arr, {
            question: item.question,
            id: item.id,
            category: item.category
        }])));
    }, [])

    return (
        <div className="py-20">
            <h1 className="font-bold text-3xl text-white mb-8">PERSONALITY TEST</h1>
            <form className="bg-white shadow-xl w-11/12 md:w-1/2 m-auto grid place-items-center my-8">
                <ol className="w-full text-left p-2">
                    {array.map(item => {
                        return (
                            <li><span>{item.id}. </span>
                                <label>{item.question}</label>
                                <div>
                                    <label className="h-10 w-4 p-0 opacity-0 absolute px-4 py-2 block" class="btn btn-outline-primary"><input className="opacity-0 absolute question-input" type="radio" name="toggle" /><span className="px-4 py-2 block question-span">Strongly Disagree</span></label>

                                    {/* <label class="btn btn-outline-primary"><input type="radio" name="toggle" /><span>Disgree</span></label>
                                    <label class="btn btn-outline-primary"><input type="radio" name="toggle" /><span>Neither Agree nor Disagree</span></label>
                                    <label class="btn btn-outline-primary"><input type="radio" name="toggle" /><span>Agree</span></label>
                                    <label class="btn btn-outline-primary"><input type="radio" name="toggle" /><span>Strongly Agree</span></label> */}
                                </div>
                            </li>
                        )
                    })}
                </ol>
            </form>
        </div>
    )
}

export default Questions
