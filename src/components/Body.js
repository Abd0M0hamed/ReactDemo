import React from "react"
import Todos from "./Todos"
import Cards from "./Cards"
import Jokes from "./Jokes"
import Products from "./Products"

class Body extends React.Component {

  getName() {
    return "Abdelrahman Mohamed";
  }

  getStyles(){
    return {
      //color: "#FF8C00",
      color: "#D90000",
      backgroundColor: "#FFF"
    }
  }

  render(){
    const name = this.getName()
    const styles = this.getStyles()
    return (
      <div id="body">
        <h5>Welcome, My name is
          <i style={styles}> {name}</i>
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
