import React from "react"
import Todos from "./Todos"
import Cards from "./Cards"
import Jokes from "./Jokes"
import Products from "./Products"
import RemoteCaller from "./RemoteCaller"
import ContactUs from "./ContactUs"

class Body extends React.Component {

  render(){

    return (
      <div id="body">
        <br />
        <ContactUs />
        <br />
        <RemoteCaller />
        <br />
        <Todos />
        <br />
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
