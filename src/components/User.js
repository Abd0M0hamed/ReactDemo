import React from "react"

class User extends React.Component {

  constructor(){
    super()
    this.state = {
      loggedin: false,
      name: ""
    }
  }

  getName() {
    return "Abdelrahman Mohamed";
  }

  getLoginState(){
    return this.state.loggedin;
  }

  login(){
    this.state.loggedin = true;
    this.state.name = "Abdelrahman Mohamed";
  }

  logout(){
    this.state.loggedin = false;
    this.state.name = "";
  }

}

export default User
