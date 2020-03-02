import React from "react"

class SignIn extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(<button onClick={this.props.handleClick}>Sign In</button>)
  }
}
export default SignIn
