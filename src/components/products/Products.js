import React from "react"
import ProductsData from "./ProductsData"
import ProductItem from "./ProductItem"

class Products extends React.Component {

  getProductList(){
    return ProductsData.map(item =>
      <ProductItem key={item.id} product={item} />
    )
  }

  render(){
    const ProductList = this.getProductList();
    return (
      <div>
        {ProductList}
      </div>
    )
  }



}

export default Products
