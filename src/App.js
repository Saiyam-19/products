import React, { useState, useEffect } from 'react';
import Product from './Product';
import './styles.css';
import { ReactComponent as SpinnerIcon } from './spinner.svg';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setIsLoaded(true);
        handleSearch();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  function handleSearch() {
    document
      .querySelector("#search-input")
      .addEventListener("input", function () {
        var searchTerm = this.value.toLowerCase();
        var productItems = document.querySelectorAll(".product-item");
        for (var i = 0; i < productItems.length; i++) {
          var productTitle = productItems[i]
            .querySelector(".product-title")
            .innerText.toLowerCase();
            var productCategory = productItems[i]
            .querySelector(".product-category")
            .innerText.toLowerCase();
          if (productTitle.indexOf(searchTerm) === -1 && productCategory.indexOf(searchTerm)=== -1) {
            productItems[i].style.display = "none";
          } else {
            productItems[i].style.display = "block";
          }
        }
      });
  }

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
