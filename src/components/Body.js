import React from "react"
import Todos from "./Todos"
import Cards from "./Cards"
import Jokes from "./Jokes"
import Products from "./Products"
//import User from "./User"

class Body extends React.Component {

  getStyles(){
    return {
      //color: "#FF8C00",
      color: "#D90000",
      backgroundColor: "#FFF"
    }
  }

  render(){
    const name = "Abdoo"//User.getName()
    const styles = this.getStyles()
    return (
      <div id="body">
        <h5>Welcome <i style={styles}> {name}</i>
        </h5>
        <br /><br /><br />
        <Todos />
        <Cards />
        <hr />
        <Jokes />
        <hr />
        <Products />
      </div>
    );
  }
}
export default Body
