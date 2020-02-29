import React from "react"

class SignUp extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(<button onClick={this.props.handleClick}>Sign Up</button>)
  }
}
export default SignUp
