import React from "react"

class SignOut extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(<button onClick={this.props.handleClick}>Sign Out</button>)
  }
}
export default SignOut
