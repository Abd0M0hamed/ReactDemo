import React from "react"
import ReactDOM from "react-dom"
import JokeItem from "./JokeItem"
import JokesData from "./JokesData"

const Jokes = () => {

  const JokesList = JokesData.map(item => <JokeItem key={item.id} question={item.question} answer={item.answer} />)

  return(
    <div>

      <JokeItem
        question=""
        answer="Answer 1."
      />

      <JokeItem
        question="Question 2?"
        answer=""
      />

      {JokesList}

    </div>
  )
}

export default Jokes
