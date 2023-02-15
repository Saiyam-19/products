import React, { useState, useEffect } from 'react';
import Product from './Product';
import './styles.css';
import { ReactComponent as SpinnerIcon } from './spinner.svg';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // setIsLoaded(false);
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      {!isLoaded ? (
        <div className="spinner">
          <SpinnerIcon />
        </div>
      ) : (
        <Product products={products} />
      )}
    </>
  );
}

export default App;
