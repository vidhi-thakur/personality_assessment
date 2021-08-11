import React, { useState, useEffect } from 'react'
import careerInfo from "../careerInfo.json"

function Questions() {

    const [array, setArray] = useState([])
    const [submit, setSubmit] = useState(false)
    const [extraversion, setExtraversion] = useState(0)
    const [agreeableness, setAgreeableness] = useState(0)
    const [conscientiousness, setConscientiousness] = useState(0)
    const [emotional_stability, setImotional_stability] = useState(0)
    const [intellect, setIntellect] = useState(0)
    const [personalityType, setPersonalityType] = useState("")
    
    const url = "https://personalitytest.herokuapp.com/api/v1/questions";

    useEffect(() => {
        fetch(url).then(response => response.json()).then(result => result.map(item => setArray(arr => [...arr, {
            question: item.question,
            id: item.id,
            category: item.category
        }])));
    }, [])

    const handleChange = (data, number) => {
        if (data === "extraversion") {
            setExtraversion(extraversion + number)
        } else if (data === "agreeableness") {
            setAgreeableness(agreeableness + number)
        } else if (data === "conscientiousness") {
            setConscientiousness(conscientiousness + number)
        } else if (data === "emotional_stability") {
            setImotional_stability(emotional_stability + number)
        } else if (data === "intellect") {
            setIntellect(intellect + number)
        } else {
            alert("Something went wrong!")
        }

    }

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);

        var score = {
            extraversion: extraversion,
            agreeableness: agreeableness,
            conscientiousness: conscientiousness,
            emotional_stability: emotional_stability,
            intellect: intellect
        }

        let objArray = Object.keys(score);

        for (let i = 0; i < objArray.length; i++) {
            var temp = 0;
            if (temp - score[objArray[i]] < 0) {
                temp = score[objArray[i]];
                setPersonalityType(objArray[i])
            }
         }

    }

    return (<>
        {!submit ? (<div className="py-20">
            <h1 className="font-bold text-3xl text-white mb-8">PERSONALITY TEST</h1>
            <form className="bg-white shadow-xl w-11/12 md:w-2/5 m-auto text-center my-8">
                <ol className="w-full text-left p-4 mx-auto block">
                    {array.map(item => {
                        return (
                            <li><span>{item.id}. </span>
                                <label>{item.question}</label>
                                <div className="flex flex-wrap">
                                    <label for={`stronglyDisagree-${item.id}`} className="absloute p-0 input-label cursor-pointer">
                                        <input onChange={() => handleChange(item.category, 1)} className="question-input hidden" type="radio" key={`stronglyDisagree-${item.id}`} id={`stronglyDisagree-${item.id}`} name={`question-${item.id}`} value="1" />
                                        <span className="text-center h-12 text-xs grid items-center w-20 border-teal-600 absloute question-span font-semibold text-teal-600 m-4">Strongly Disagree</span>
                                    </label>

                                    <label for={`disagree-${item.id}`} className="absloute p-0 input-label cursor-pointer">
                                        <input onChange={() => handleChange(item.category, 2)} className="question-input hidden" type="radio" key={`disagree-${item.id}`} id={`disagree-${item.id}`} name={`question-${item.id}`} value="1" />
                                        <span className="text-center h-12 text-xs grid items-center w-20 border-teal-600 absloute question-span font-semibold text-teal-600 m-4">Disagree</span>
                                    </label>

                                    <label for={`neutral-${item.id}`} className="absloute p-0 input-label cursor-pointer">
                                        <input onChange={() => handleChange(item.category, 3)} className="question-input hidden" type="radio" key={`neutral-${item.id}`} id={`neutral-${item.id}`} name={`question-${item.id}`} value="1" />
                                        <span className="text-center h-12 text-xs grid items-center w-20 border-teal-600 absloute question-span font-semibold text-teal-600 m-4">Neutral</span>
                                    </label>

                                    <label for={`agree-${item.id}`} className="absloute p-0 input-label cursor-pointer">
                                        <input onChange={() => handleChange(item.category, 4)} className="question-input hidden" type="radio" key={`agree-${item.id}`} id={`agree-${item.id}`} name={`question-${item.id}`} value="4" />
                                        <span className="text-center h-12 text-xs grid items-center w-20 border-teal-600 absloute question-span font-semibold text-teal-600 m-4">Agree</span>
                                    </label>

                                    <label for={`stronglyAgree-${item.id}`} className="absloute p-0 input-label cursor-pointer">
                                        <input onChange={() => handleChange(item.category, 5)} className="question-input hidden" type="radio" key={`stronglyAgree-${item.id}`} id={`stronglyAgree-${item.id}`} name={`question-${item.id}`} value="5" />
                                        <span className="text-center h-12 text-xs grid items-center w-20 border-teal-600 absloute question-span font-semibold text-teal-600 m-4">Strongly Agree</span>
                                    </label>
                                </div>
                            </li>
                        )
                    })}
                </ol>
                <div className="mr-4 pb-4">
                    <button onClick={(e) => onSubmit(e)} className="bg-teal-600 px-6 text-white py-2 hover:bg-white next-btn border-teal-600" type="submit">SUBMIT</button>
                </div>
            </form>
        </div>) : <div className="py-20">
            <h1 className="font-bold text-white text-3xl mb-8">REPORT</h1>
            <div className="bg-white shadow-xl w-11/12 md:w-2/5 m-auto text-center my-8 p-8">
                <h1 className="uppercase underline font-bold text-xl text-teal-600 mb-8">{`Your dominant personality type is: ${personalityType}`}</h1>
                <img className="w-full my-4 h-60" src={careerInfo[`${personalityType}`].url} alt="result-img" />
                <p className="text-justify">{careerInfo[`${personalityType}`].about}</p>
                <h2 className="my-2 text-justify">Some of the professions for suitable for you are: -</h2>
                <ol className="text-justify">
                    {careerInfo[`${personalityType}`].relatedProfession.map((data, i) => <li><span>{i + 1}. </span>{data}</li>)}
                </ol>
            </div>
        </div>
        }</>
    )
}

export default Questions
