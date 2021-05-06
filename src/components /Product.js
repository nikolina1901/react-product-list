import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.price}</p>
      <p>{props.description}</p>
      <img src={props.image} alt={props.title} height="50px" />
      <Link to={`/products/${props.id}`}>Product Details</Link>
    </div>
  );
};

export default Product;
