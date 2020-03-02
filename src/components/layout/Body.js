import React from "react"
import Todos from "../todos/Todos"
import Cards from "../cards/Cards"
import Jokes from "../jokes/Jokes"
import Products from "../products/Products"
import RemoteCaller from "../etc/RemoteCaller"
import ContactUs from "../forms/ContactUs"

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
