import React from "react";
import "./products.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap grid.css";
import "./swiper 9.3.1.css";
import product_item1 from "../Assets/product-item1.jpg";
import product_item2 from "../Assets/product-item2.jpg";
import product_item3 from "../Assets/product-item3.jpg";
import product_item4 from "../Assets/product-item4.jpg";

function featured_products() {
  return (
    <>
      <div className="App-featured_products">
        <section id="featured-products" className="product-store padding-large">
          <div className="container">
            <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
              <h2 className="section-title">Featured Products</h2>
              <div className="btn-wrap">
                <a href="shop.html" className="d-flex align-items-center">
                  View all products <i className="icon icon icon-arrow-io" />
                </a>
              </div>
            </div>
            <div className="swiper product-swiper overflow-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product-item">
                    <div className="image-holder">
                      <img
                        src={product_item1}
                        alt="Books"
                        className="product-image"
                      />
                    </div>
                    <div className="cart-concern">
                      <div className="cart-button d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn-wrap cart-link d-flex align-items-center"
                        >
                          add to cart <i className="icon icon-arrow-io" />
                        </button>
                        <button
                          type="button"
                          className="view-btn tooltip
                        d-flex"
                        >
                          <i className="icon icon-screen-full" />
                          <span className="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" className="wishlist-btn">
                          <i className="icon icon-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">
                          Full sleeve cover shirt
                        </a>
                      </h3>
                      <span className="item-price text-primary">$40.00</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-item">
                    <div className="image-holder">
                      <img
                        src={product_item2}
                        alt="Books"
                        className="product-image"
                      />
                    </div>
                    <div className="cart-concern">
                      <div className="cart-button d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn-wrap cart-link d-flex align-items-center"
                        >
                          add to cart <i className="icon icon-arrow-io" />
                        </button>
                        <button
                          type="button"
                          className="view-btn tooltip
                        d-flex"
                        >
                          <i className="icon icon-screen-full" />
                          <span className="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" className="wishlist-btn">
                          <i className="icon icon-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Volunteer Half blue</a>
                      </h3>
                      <span className="item-price text-primary">$38.00</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-item">
                    <div className="image-holder">
                      <img
                        src={product_item3}
                        alt="Books"
                        className="product-image"
                      />
                    </div>
                    <div className="cart-concern">
                      <div className="cart-button d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn-wrap cart-link d-flex align-items-center"
                        >
                          add to cart <i className="icon icon-arrow-io" />
                        </button>
                        <button
                          type="button"
                          className="view-btn tooltip
                        d-flex"
                        >
                          <i className="icon icon-screen-full" />
                          <span className="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" className="wishlist-btn">
                          <i className="icon icon-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Double yellow shirt</a>
                      </h3>
                      <span className="item-price text-primary">$44.00</span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-item">
                    <div className="image-holder">
                      <img
                        src={product_item4}
                        alt="Books"
                        className="product-image"
                      />
                    </div>
                    <div className="cart-concern">
                      <div className="cart-button d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn-wrap cart-link d-flex align-items-center"
                        >
                          add to cart <i className="icon icon-arrow-io" />
                        </button>
                        <button
                          type="button"
                          className="view-btn tooltip
                        d-flex"
                        >
                          <i className="icon icon-screen-full" />
                          <span className="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" className="wishlist-btn">
                          <i className="icon icon-heart" />
                        </button>
                      </div>
                    </div>
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Long belly grey pant</a>
                      </h3>
                      <span className="item-price text-primary">$33.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default featured_products;
