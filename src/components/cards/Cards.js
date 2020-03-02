import React from "react"
import CardItem from "./CardItem"

class Cards extends React.Component {

  render(){

    return (
      <div className="cards">
        <CardItem
          contact={{
            imageUrl:"assets/images/cats/1.jpg",
            cardTitle:"Box Title",
            cardDescription:"Box Description"
          }}
        />
        <CardItem
          contact={{
            imageUrl:"assets/images/cats/2.jpg",
            cardTitle:"Box Title",
            cardDescription:"Box Description"
          }}
        />
        <CardItem
          contact={{
            imageUrl:"assets/images/cats/3.jpg",
            cardTitle:"Box Title",
            cardDescription:"Box Description"
          }}
        />
        <CardItem
          contact={{
            imageUrl:"assets/images/cats/4.jpg",
            cardTitle:"Box Title",
            cardDescription:"Box Description"
          }}
        />
        <CardItem
          contact={{
            imageUrl:"assets/images/cats/5.jpg",
            cardTitle:"Box Title",
            cardDescription:"Box Description"
          }}
        />
      </div>
    )
  }

}

export default Cards
