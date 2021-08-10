import React from 'react'

function Questions() {
    const url = "https://personalitytest.herokuapp.com/api/v1/questions";

    var questions = fetch(url).then(response => response.json()).then(result => result.map(item => <li>{item.question}</li>))


    return (
        <div>
            <ul>
                {
                   fetch(url).then(response => response.json()).then(result => result.map(item => <li>{item.question}</li>))
                }
            </ul>
        </div>
    )
}

export default Questions
