import React from "react"
import ReactDOM from "react-dom"
import JokeItem from "./JokeItem"
import JokesData from "./JokesData"

class Jokes extends React.Component {

  getJokesData(){
    return JokesData.map( item =>
      <JokeItem
        key={item.id}
        question={item.question}
        answer={item.answer}
      />
    )
  }

  render(){
    const JokesList = this.getJokesData()
    return(
      <div>
        <JokeItem question="" answer="Answer 1." />
        <JokeItem question="Question 2?" answer="" />
        {JokesList}
      </div>
    )
  }

}

export default Jokes
