import React from 'react';
import data from './data.json';
import './styles.css';

function App() {
  // const products = props.products;
  // console.log(products);
  return(
    <div className='container'>
      <div className="product-list">
 { data.products.map(item =>(
    // console.log(item.images)
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
  )
}

export default App;
