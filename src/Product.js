import React from "react";
// import data from "./data.json";
import "./styles.css";

function Product(data) {
  // const products = props.products;
  console.log();
  return (
    <div className="search">
    <label>Search:</label>
    <input type="text" id="search-input"/>
    <div className="container">
      <div className="product-list">
        {data.products.products?.map((item) => (
          <div className="product-item" id="template">
            <img src={item.images[0]} className="product-image" />
            <div className="product-title">{item.title}</div>
            <div className="product-category">{item.category}</div>
            <div className="product-price">${item.price}</div>
            <div className="product-rating">{item.rating}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}


export default Product;
