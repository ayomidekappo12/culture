import React from "react";
import "./Best-Selling.css";

const ProductItem = ({ image, title, price }) => (
  <div className="product-item col-lg-3 col-md-6 col-sm-6">
    <div className="image-holder">
      {image.map((img, index) => (
        <img
          key={index}
          src={img.default}
          alt={`Selling-products ${index + 1}`}
          className="product-image"
        />
      ))}
    </div>
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
    <div className="product-detail">
      <h3 className="product-title">
        <a href="single-product.html">{title}</a>
      </h3>
      <div className="item-price text-primary">{price}</div>
    </div>
  </div>
);

const BestSelling = () => {
  const sellingProductsImages = [
    { default: "../Assets/Image/selling-product.jpg" },
    { default: "../Assets/Image/selling-products2.jpg" },
    { default: "../Assets/Image/selling-products3.jpg" },
    { default: "../Assets/Image/selling-products4.jpg" },
    { default: "../Assets/Image/selling-products5.jpg" },
    { default: "../Assets/Image/selling-products6.jpg" },
    { default: "../Assets/Image/selling-products7.jpg" },
    { default: "../Assets/Image/selling-products8.jpg" },
    { default: "../Assets/Image/selling-products9.jpg" },
    { default: "../Assets/Image/selling-products10.jpg" },
    { default: "../Assets/Image/selling-products11.jpg" },

    // Add more images as needed
  ];

  const sellingProducts = [
    {
      title: "White Hoodie",
      price: "$40.00",
      image: [sellingProductsImages[0]],
    },
    {
      title: "Navy Blue Hoodie",
      price: "$45.00",
      image: [sellingProductsImages[1]],
    },
    {
      title: "Dark Green Hoodie",
      price: "$35.00",
      image: [sellingProductsImages[2]],
    },
    {
      title: "Silk White Shirt",
      price: "$35.00",
      image: [sellingProductsImages[3]],
    },
    {
      title: "Grunge Hoodie",
      price: "$30.00",
      image: [sellingProductsImages[4]],
    },
    {
      title: "Grey Check Coat",
      price: "$30.00",
      image: [sellingProductsImages[5]],
    },
    {
      title: "Long Sleeve T-shirt",
      price: "$40.00",
      image: [sellingProductsImages[6]],
    },
    {
      title: "Full Sleeve Jeans Jacket",
      price: "$40.00",
      image: [sellingProductsImages[7]],
    },
    {
      title: "Stylish Grey Coat",
      price: "$35.00",
      image: [sellingProductsImages[8]],
    },
    {
      title: "Stylish Women Bag",
      price: "$35.00",
      image: [sellingProductsImages[9]],
    },
    {
      title: "Stylish Gadgets",
      price: "$30.00",
      image: [sellingProductsImages[10]],
    },
    // Add more products as needed
  ];

  return (
    <div>
      {/* Render tabs and other common layout if needed */}
      <div className="row d-flex flex-wrap">
        {sellingProducts.map((product, index) => (
          <ProductItem key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
