import React from 'react'
import Card from '../components/Card'
import test from "../images/test.svg"
import report from "../images/report.svg"
import potential from "../images/potential.svg"

function Welcome() {
    return (
        <div className="w-9/12 m-auto bg-transparent py-16">
            <header className="text-white my-16">
                <h1 className="font-bold text-3xl">FREE PERSONALITY TEST</h1>
                <p className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto my-4">Take this free Personality Test and find out more about yourself. This assessment evaluates your personality and suggests the possible career options your personality type can exel in.</p>
            </header>
            <div className="flex flex-wrap justify-evenly">
                <Card img={test} title="Complete the test" content="Take the test and provide answers to all the questions." />
                <Card img={report} title="View detailed results" content="Check the suggestions provided to you in a report." />
                <Card img={potential} title="Unlock your potential" content="Analyse what career you can exel at and work on your goals." />
            </div>
        </div>
    )
}

export default Welcome
