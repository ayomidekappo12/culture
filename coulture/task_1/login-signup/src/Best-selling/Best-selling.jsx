import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Best-Selling.css";

const ProductItem = ({ image, title, price }) => (
  <div className="product-item col-lg-3 col-md-6 col-sm-6">
    <div className="image-holder">
      {image.map((img, index) => (
        <img
          key={index}
          src={img.default}
          alt={`books ${index + 1}`}
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
          <i className="icon icon-screen-full" />
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
  const [activeTab, setActiveTab] = useState("all"); // Default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const sellingProductsImages = [
    require("../Assets/Image/selling-product.jpg"),
    require("../Assets/Image/selling-products2.jpg"),
    require("../Assets/Image/selling-products3.jpg"),
    require("../Assets/Image/selling-products4.jpg"),
    require("../Assets/Image/selling-products5.jpg"),
    require("../Assets/Image/selling-products6.jpg"),
    require("../Assets/Image/selling-products7.jpg"),
    require("../Assets/Image/selling-products8.jpg"),
    require("../Assets/Image/selling-products9.jpg"),
    require("../Assets/Image/selling-products10.jpg"),
    require("../Assets/Image/selling-products11.jpg"),
    require("../Assets/Image/selling-products12.jpg"),
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
    {
      title: "Stylish Suit",
      price: "$30.00",
      image: [sellingProductsImages[11]],
    },
    // Add more products as needed
  ];

  const renderProductsByCategory = (category) => {
    return sellingProducts
      .filter((product) => category === "all" || product.category === category)
      .map((product, index) => <ProductItem key={index} {...product} />);
  };

  return (
    <>
      <div id="best-selling-component">
        <div id="selling-products" className="section-header">
          <h2
            className="section-title"
            style={{
              padding: "20px",
              margin: "20px",
              fontSize: "50px",
              fontWeight: "800",
            }}
          >
            Best selling products
          </h2>

          <ul
            className="tabs list-unstyled"
            style={{
              padding: "20px",
              margin: "20px",
            }}
          >
            <li
              onClick={() => handleTabClick("all")}
              className={`tab ${activeTab === "all" ? "active" : ""}`}
              style={{
                color: "#8d8d8d",
                cursor: "pointer",
                transition: "0.2s all",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#6995b1")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8d8d8d")}
            >
              All
            </li>
            <li
              onClick={() => handleTabClick("shoes")}
              className={`tab ${activeTab === "shoes" ? "active" : ""}`}
              style={{
                color: "#8d8d8d",
                cursor: "pointer",
                transition: "0.2s all",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#6995b1")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8d8d8d")}
            >
              Shoes
            </li>
            <li
              onClick={() => handleTabClick("tshirts")}
              className={`tab ${activeTab === "tshirts" ? "active" : ""}`}
              style={{
                color: "#8d8d8d",
                cursor: "pointer",
                transition: "0.2s all",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#6995b1")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8d8d8d")}
            >
              Tshirts
            </li>
            <li
              onClick={() => handleTabClick("pants")}
              className={`tab ${activeTab === "pants" ? "active" : ""}`}
              style={{
                color: "#8d8d8d",
                cursor: "pointer",
                transition: "0.2s all",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#6995b1")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8d8d8d")}
            >
              Pants
            </li>
            <li
              onClick={() => handleTabClick("hoodie")}
              className={`tab ${activeTab === "hoodie" ? "active" : ""}`}
              style={{
                color: "#8d8d8d",
                cursor: "pointer",
                transition: "0.2s all",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#6995b1")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8d8d8d")}
            >
              Hoodie
            </li>
            <li
              onClick={() => handleTabClick("outer")}
              className={`tab ${activeTab === "outer" ? "active" : ""}`}
              style={{
                color: "#8d8d8d",
                cursor: "pointer",
                transition: "0.2s all",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#6995b1")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8d8d8d")}
            >
              Outer
            </li>
            <li
              onClick={() => handleTabClick("jackets")}
              className={`tab ${activeTab === "jackets" ? "active" : ""}`}
              style={{
                color: "#8d8d8d",
                cursor: "pointer",
                transition: "0.2s all",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#6995b1")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8d8d8d")}
            >
              Jackets
            </li>
            <li
              onClick={() => handleTabClick("accessories")}
              className={`tab ${activeTab === "accessories" ? "active" : ""}`}
              style={{
                color: "#8d8d8d",
                cursor: "pointer",
                transition: "0.2s all",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#6995b1")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#8d8d8d")}
            >
              Accessories
            </li>
          </ul>
        </div>

        <div className="grid-container tab-content">
          {renderProductsByCategory(activeTab)}
        </div>
      </div>
    </>
  );
};

export default BestSelling;
