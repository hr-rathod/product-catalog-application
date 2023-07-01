import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../API/api';
import "./productDetail.css"
function ProductDetail() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
      }
    };

    fetchData();
  }, []);

 
    return (
      <div className='mt-5'>
        {products.map((product) => {
          const { id, image, name, rating, shortDescription, description, price } = product;

          return (
            <div key={id} className="product-container">
              <div className="product-image">
                <img src={image} alt={name} />
              </div>
              <div className="product-details">
                <h1 className="product-name">{name}</h1>
                <div className="product-rating">
                  Rating: <span>{rating}</span>
                </div>
                <p className="product-short-desc"> {shortDescription}</p>
                <p className="product-description"><span>Description:</span> {description}</p>
                <p className="product-price">Price: {price}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };


export default ProductDetail;
