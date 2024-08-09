import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/sidebar";
import products from './DB/data';
import { useState } from "react";
import Card from "./components/Card";
import "./index.css";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // ----------Input Filter----------- 
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }
  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  )

  // ------- Radio Filter -----------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  // --------- Button Filter -------------
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    // Filter input filteredItems
    if (query) {
      filteredProducts = filteredItems
    }
    // Selected Filter 
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (

      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }
  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <h1>Coutur Corner Shop </h1>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />

    </>
  );
}


export default App; 
