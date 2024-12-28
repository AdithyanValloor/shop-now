import React, { useEffect } from 'react';
import './ProductCards.css';
import { useProducts } from '../ProductProvide';
import preloader from '../assets/preloader.gif'

function ProductCards({category}) {
  const { products, setProducts } = useProducts();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${category ? `category/${category.toLowerCase()}`:''}`
        );
  
        const productData = await response.json();
        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [setProducts, category]);

  if (!products || products.length === 0) {
    return <div className='preloader-container'><img src= {preloader} alt="preloader" className='preloader'/></div>
  }

  return (
    <div>
        <div className='produts-type'>
            <p className='products-type-p'>{category?category:"All Products"}</p>
        </div>
      <div className="card-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-img-div">
              <img className="product-img" src={product.image} alt={product.title} />
            </div>
            <div className="product-textbox">
              <div className="product-name-div">
                <p className="product-name">{product.title}</p>
              </div>
              <p className="product-price">$ {product.price}</p>
              <div className="product-description-div">
                <p className="product-description">{product.description}</p>
              </div>
              <p className="product-rating">
                {product.rating.rate} <i className="bi bi-star-fill"></i>
              </p>
              <p className="product-review">{product.rating.count} Reviews</p>
              <button className="product-btn-add">
                Add to cart <i className="bi bi-cart3"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCards;
