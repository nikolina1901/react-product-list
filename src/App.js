import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components /ProductList";
import React from "react";

function App() {
  const [allPoducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <ProductList allPoducts={allPoducts} />
    </div>
  );
}

export default App;
