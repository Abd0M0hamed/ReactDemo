import React from "react"
import CardItem from "./CardItem"

const Cards = () => {
  return (<div className="cards">

  <CardItem
    imageUrl="assets/images/cats/1.jpg"
    cardTitle="Box Title"
    cardDescription="Box Description"
  />

  <CardItem
      imageUrl="assets/images/cats/2.jpg"
      cardTitle="Box Title"
      cardDescription="Box Description"
  />

  <CardItem
      imageUrl="assets/images/cats/3.jpg"
      cardTitle="Box Title"
      cardDescription="Box Description"
  />

  <CardItem
      imageUrl="assets/images/cats/4.jpg"
      cardTitle="Box Title"
      cardDescription="Box Description"
  />

  <CardItem
      imageUrl="assets/images/cats/5.jpg"
      cardTitle="Box Title"
      cardDescription="Box Description"
  />


  </div>)
}

export default Cards
