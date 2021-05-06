import React from "react";
import Product from "./Product";
const ProductList = (props) => {
  //console.log(props);
  return (
    <div>
      {props.allPoducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;

// id
// :
// 1
// title
// :
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// price
// :
// 109.95
// description
// :
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// category
// :
// "men's clothing"
// image
// :
