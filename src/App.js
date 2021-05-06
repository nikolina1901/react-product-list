import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [allPoducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return <div className="App"></div>;
}

export default App;
