import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, onAddtoCart }) => {

  if (products.length === 0) {
    return (
      <div>
        <h2>Available Products</h2>
        <p>No products available</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Available Products</h2>
      
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} addtocart={onAddtoCart}/>
      })}
    </div>
  )
}

export default ProductList