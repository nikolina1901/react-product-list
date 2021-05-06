import React from "react";

const Product = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.price}</p>
      <img src={props.image} alt={props.title} height="50px" />
    </div>
  );
};

export default Product;
