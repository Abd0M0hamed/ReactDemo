import React from "react"
import Todos from "./Todos"
import Cards from "./Cards"
import Jokes from "./Jokes"
function Body() {

  const name = "Abdelrahman Mohamed"
  const styles = {
    //color: "#FF8C00",
    color: "#D90000",
    backgroundColor: "#FFF"
  }

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
    </div>
  );
}
export default Body
