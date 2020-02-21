import React from "react"

const ProductItem = (props) => {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <p>
        {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"})} - {props.product.description}
      </p>
    </div>
  )
}

export default ProductItem
