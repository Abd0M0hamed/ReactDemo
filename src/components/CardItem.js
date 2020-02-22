import React from "react"


class CardItem extends React.Component {

  render(){
    return (
      <div className="card">
        <img src={this.props.contact.imageUrl} />
        <h3>{this.props.contact.cardTitle}</h3>
        <div>{this.props.contact.cardDescription}</div>
      </div>
    )
  }
}

export default CardItem
