import React from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components /ProductList";
import ProductDetails from "./components /ProductDetails";

function App() {
  const [allProducts, setAllProducts] = useState([]);
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
          render={(props) => (
            <ProductList {...props} allProducts={allProducts} />
          )}
        />
        <Route
          path="/products/:id"
          render={(props) => (
            <ProductDetails {...props} allProducts={allProducts} />
          )}
        />

        <Redirect to="/products" />
      </Switch>
    </div>
  );
}

export default App;
