import React from "react"
import ReactDOM from "react-dom"

const JokeItem = (props) => {
  const styles = {
    textAlign:"left",
    margin: "10px 0px",
    padding: "10px 0px",
  }
  return (
    <div style={styles}>

      <div style={{display: props.question ? "block" : "none"}}> Question: <span style={{color:"red"}}>{props.question}</span> </div>

      {/* !props.answer && "none"  means If answer is empty, then will set display to none */}

      <div style={{display: !props.answer && "none"}}> Answer: <span style={{color:"green"}}>{props.answer}</span> </div>
      <hr />
    </div>
  )
}

export default JokeItem
