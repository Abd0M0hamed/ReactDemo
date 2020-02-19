import React from "react"

const CardItem = (props) => {
  return (<div className="card">
    <img src={props.imageUrl} />
    <h3>{props.cardTitle}</h3>
    <div>{props.cardDescription}</div>
  </div>)
}

export default CardItem
