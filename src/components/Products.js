import React from "react"
import ProductsData from "./ProductsData"
import ProductItem from "./ProductItem"

const Products = () => {
  const ProductList = ProductsData.map(product =>
    <ProductItem key={product.id} product={product} />
  )
  return (
    <div>
      {ProductList}
    </div>
  )
}

export default Products
