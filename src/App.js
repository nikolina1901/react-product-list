import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components /ProductList";
import React from "react";

import ProductDetails from "./components /ProductDetails";

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
      <Switch>
        <Route
          exact
          path="/products"
          render={(props) => <ProductList allPoducts={allPoducts} />}
        />
        <Route
          path="/products/:id"
          render={(props) => <ProductDetails allPoducts={allPoducts} />}
        />
        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
