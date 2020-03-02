import React from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import SignOut from "./SignOut"
import Body from "../layout/Body"

class User extends React.Component {

  constructor(){
    super()
    this.state = {
      user: {name: ""},
      isLoggedIn: false,
      statusMessage: null
    }
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  getStyles(){
    return {
      //color: "#FF8C00",
      //color: "#D90000",
      color: "green",
      fontSize: '20px'
    }
  }

  isLoggedIn(){
    return this.state.isLoggedIn
  }

  handleSignOut(){
    this.setState({ isLoggedIn: false, statusMessage: "Thank you, Have a Nice Day." })
  }
  handleSignIn(){
    if(!this.state.user.name){
      alert("You Must SignUp first.")
      return false;
    }
    this.setState({ isLoggedIn: true, statusMessage: "" })
  }
  handleSignUp(){
    let name = prompt("Please type your name.")
    this.setState({ user: { name: name } })

    if(name){
      this.setState({ statusMessage: "Thank you, Now, you can SignIn." })
    } else {
      this.setState({ statusMessage: "You need to Write a name." })
    }

  }

  render(){
    const mainDivStyles = {
      margin: "30px auto"
    }

    if(this.state.isLoggedIn){
      return(
        <div style={mainDivStyles}>
          <div style={{color: 'red', margin: '20px auto'}}>{this.state.statusMessage}</div>
          {this.state.isLoggedIn && <h5>Welcome <i style={this.getStyles()}> {this.state.user.name}</i></h5>}
          <SignOut handleClick={this.handleSignOut} />
          <Body />
        </div>
      )
    }

    return(
      <div style={mainDivStyles}>
        <div style={{color: 'red', margin: '20px auto'}}>{this.state.statusMessage}</div>
        <SignIn handleClick={this.handleSignIn} /> or <SignUp handleClick={this.handleSignUp}/>
      </div>
    )

  }

}

export default User
