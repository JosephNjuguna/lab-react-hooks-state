import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
];
  
const App = () => {
  const [darkmode, setDarkmode] = useState("dark");

  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  function handleChange(event) {
    const selectedValue = event.target.value;
    const newproducts = selectedValue === "all"
      ? sampleProducts
      : sampleProducts.filter(product => selectedValue === product.category);
    setFilteredProducts(newproducts);
  }

  const [cartitems, setCartitems] = useState([]);
  const addtocart = (id) => {
    console.log("clicked", id);
    const productToAdd = filteredProducts.find(product => product.id === id);
    if (productToAdd) {
      setCartitems([...cartitems, productToAdd]);
    }
  }

  return (
    <div>
      <h1>Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark mode.
      </p>
      <DarkModeToggle darkmode={darkmode} setdarkmode={setDarkmode} />
      <label>Filter by Category: </label>
      <select name="filter" onChange={handleChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
      <ProductList products={filteredProducts} onAddtoCart={addtocart} />
      <Cart cartitems={cartitems} />
    </div>
  )
}

export default App