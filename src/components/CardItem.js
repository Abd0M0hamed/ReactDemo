import React from "react"

const CardItem = (props) => {
  return (
    <div className="card">
      <img src={props.contact.imageUrl} />
      <h3>{props.contact.cardTitle}</h3>
      <div>{props.contact.cardDescription}</div>
    </div>
  )
}

export default CardItem
