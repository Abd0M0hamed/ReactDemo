import React from "react"
import ReactDOM from "react-dom"
import JokeItem from "./JokeItem"

const Jokes = () => {
  const JokesData = [
    {question: "Question 1?", answer: "Answer 1."},
    {question: "Question 2?", answer: "Answer 2."},
    {question: "Question 3?", answer: "Answer 3."},
    {question: "Question 4?", answer: "Answer 4."},
    {question: "Question 5?", answer: "Answer 5."},
    {question: "Question 6?", answer: "Answer 6."},
    {question: "Question 7?", answer: "Answer 7."},
    {question: "Question 8?", answer: "Answer 8."},
    {question: "Question 9?", answer: "Answer 9."},
    {question: "Question 10?", answer: "Answer 10."}
  ];
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
