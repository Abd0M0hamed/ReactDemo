import React from "react"
import ReactDOM from "react-dom"

class JokeItem extends React.Component {

  getStyles(){
    return {
      textAlign:"left",
      margin: "10px 0px",
      padding: "10px 0px",
    }
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles}>

        <div style={{display: this.props.question ? "block" : "none"}}>
          Question: <span style={{color:"red"}}>{this.props.question}</span>
        </div>

        {/* !props.answer && "none"  means If answer is empty, then will set display to none */}

        <div style={{display: !this.props.answer && "none"}}>
          Answer: <span style={{color:"green"}}>{this.props.answer}</span>
        </div>

        <hr />
      </div>
    )
  }



}

export default JokeItem
