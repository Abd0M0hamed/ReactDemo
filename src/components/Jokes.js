import React from "react"
import ReactDOM from "react-dom"
import JokeItem from "./JokeItem"

const Jokes = () => {
  return(
    <div>
      <JokeItem
        question="Question 1?"
        answer="Answer 1."
      />
      <JokeItem
        question="Question 2?"
        answer="Answer 2."
      />
      <JokeItem
        question="Question 3?"
        answer="Answer 3."
      />
      <JokeItem
        question="Question 4?"
        answer="Answer 4."
      />
      <JokeItem
        question="Question 5?"
        answer="Answer 5."
      />
    </div>
  )
}

export default Jokes
