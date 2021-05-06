import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  //console.log(props);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });
  useEffect(() => {
    if (props.allProducts.length) {
      const productId = Number(props.match.params.id);
      //console.log(productId);
      const foundProduct = props.allProducts.find(
        (item) => item.id === productId
      );
      setProduct(foundProduct);
    }
  }, [props.allProducts]);
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} height="90px" />
      <Link to={"/products"}>All products</Link>
    </div>
  );
};

export default ProductDetails;
