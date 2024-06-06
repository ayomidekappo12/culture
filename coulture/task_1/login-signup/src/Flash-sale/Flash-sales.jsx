import React from "react";
import "./Flash-sales.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap grid.css";
import PropTypes from "prop-types";

function ProductItem({ image, discount, title, price, prevPrice }) {
  return (
    <div className="product-item">
      {image && (
        <div className="image-holder">
          <img src={image} alt="Books" className="product-image" />
        </div>
      )}
      <div className="cart-concern">
        <div className="cart-button d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn-wrap cart-link d-flex align-items-center"
          >
            add to cart <i className="icon icon-arrow-io"></i>
          </button>
          <button type="button" className="view-btn tooltip d-flex">
            <i className="icon icon-screen-full"></i>
            <span className="tooltip-text">Quick view</span>
          </button>
          <button type="button" className="wishlist-btn">
            <i className="icon icon-heart"></i>
          </button>
        </div>
      </div>
      <div className="discount">{discount}</div>
      <div className="product-detail">
        <h3 className="product-title">
          <a href="single-product.html">{title}</a>
        </h3>
        <div className="item-price text-primary">
          <del className="prev-price">${prevPrice.toFixed(2)}</del>$
          {price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string,
  discount: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  prevPrice: PropTypes.number.isRequired,
};

function Flash_sales() {
  const products = [
    {
      image: require("../Assets/Image/selling-products9.jpg").default,
      discount: "10% Off",
      title: "Full sleeve cover shirt",
      price: 40.0,
      prevPrice: 50.0,
    },
    {
      image: require("../Assets/Image/selling-products10.jpg").default,
      discount: "10% Off",
      title: "Full sleeve cover shirt",
      price: 40.0,
      prevPrice: 50.0,
    },
    {
      image: require("../Assets/Image/selling-products11.jpg").default,
      discount: "10% Off",
      title: "Full sleeve cover shirt",
      price: 45.0,
      prevPrice: 55.0,
    },
    {
      image: require("../Assets/Image/selling-products12.jpg").default,
      discount: "10% Off",
      title: "Full sleeve cover shirt",
      price: 35.0,
      prevPrice: 45.0,
    },
    {
      image: require("../Assets/Image/selling-products8.jpg").default,
      discount: "10% Off",
      title: "Full sleeve cover shirt",
      price: 35.0,
      prevPrice: 45.0,
    },
    {
      image: require("../Assets/Image/selling-products14.jpg").default,
      discount: "10% Off",
      title: "Full sleeve cover shirt",
      price: 35.0,
      prevPrice: 45.0,
    },
    {
      image: require("../Assets/Image/selling-products20.jpg").default,
      discount: "10% Off",
      title: "Full sleeve cover shirt",
      price: 35.0,
      prevPrice: 45.0,
    },
    {
      image: require("../Assets/Image/selling-products18.jpg").default,
      discount: "10% Off",
      title: "Full sleeve cover shirt",
      price: 35.0,
      prevPrice: 45.0,
    },
    // Add more products as needed
  ];

  return (
    <section id="flash-sales" className="product-store padding-large">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Flash sales</h2>
        </div>
        <div className="grid-container">
          {products.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Flash_sales;
