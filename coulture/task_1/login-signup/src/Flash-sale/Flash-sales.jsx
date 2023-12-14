import React from "react";
import "./Flash-sales.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap grid.css";
import selling_products8 from "../Assets/image/selling-products10.jpg";
import selling_products9 from "../Assets/image/selling-products10.jpg";
import selling_products10 from "../Assets/image/selling-products10.jpg";
import selling_products11 from "../Assets/image/selling-products10.jpg";
import selling_products12 from "../Assets/image/selling-products10.jpg";

function Flash_sales() {
  return (
    <>
      <div>
        <section id="flash-sales" className="product-store padding-large">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Flash sales</h2>
            </div>
            <div className="swiper product-swiper flash-sales overflow-hidden">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="product-item">
                    <img
                      src={selling_products9}
                      alt="Books"
                      className="product-image"
                    />
                    <div className="cart-concern">
                      <div className="cart-button d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn-wrap cart-link d-flex align-items-center"
                        >
                          add to cart <i className="icon icon-arrow-io"></i>
                        </button>
                        <button
                          type="button"
                          className="view-btn tooltip
                        d-flex"
                        >
                          <i className="icon icon-screen-full"></i>
                          <span className="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" className="wishlist-btn">
                          <i className="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="discount">10% Off</div>
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">
                          Full sleeve cover shirt
                        </a>
                      </h3>
                      <div className="item-price text-primary">
                        <del className="prev-price">$50.00</del>$40.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-item">
                    <img
                      src={selling_products10}
                      alt="Books"
                      className="product-image"
                    />
                    <div className="cart-concern">
                      <div className="cart-button d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn-wrap cart-link d-flex align-items-center"
                        >
                          add to cart <i className="icon icon-arrow-io"></i>
                        </button>
                        <button
                          type="button"
                          className="view-btn tooltip
                        d-flex"
                        >
                          <i className="icon icon-screen-full"></i>
                          <span className="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" className="wishlist-btn">
                          <i className="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="discount">10% Off</div>
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Long Sleeve T-shirt</a>
                      </h3>
                      <div className="item-price text-primary">
                        <del className="prev-price">$50.00</del>$40.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-item">
                    <img
                      src={selling_products11}
                      alt="Books"
                      className="product-image"
                    />
                    <div className="cart-concern">
                      <div className="cart-button d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn-wrap cart-link d-flex align-items-center"
                        >
                          add to cart <i className="icon icon-arrow-io"></i>
                        </button>
                        <button
                          type="button"
                          className="view-btn tooltip
                        d-flex"
                        >
                          <i className="icon icon-screen-full"></i>
                          <span className="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" className="wishlist-btn">
                          <i className="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="discount">10% Off</div>
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Grey Check Coat</a>
                      </h3>
                      <div className="item-price text-primary">
                        <del className="prev-price">$55.00</del>$45.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-item">
                    <img
                      src={selling_products12}
                      alt="Books"
                      className="product-image"
                    />
                    <div className="cart-concern">
                      <div className="cart-button d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn-wrap cart-link d-flex align-items-center"
                        >
                          add to cart <i className="icon icon-arrow-io"></i>
                        </button>
                        <button
                          type="button"
                          className="view-btn tooltip
                        d-flex"
                        >
                          <i className="icon icon-screen-full"></i>
                          <span className="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" className="wishlist-btn">
                          <i className="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="discount">10% Off</div>
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Silk White Shirt</a>
                      </h3>
                      <div className="item-price text-primary">
                        <del className="prev-price">$45.00</del>$35.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="product-item">
                    <img
                      src={selling_products8}
                      alt="Books"
                      className="product-image"
                    />
                    <div className="cart-concern">
                      <div className="cart-button d-flex justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn-wrap cart-link d-flex align-items-center"
                        >
                          add to cart <i className="icon icon-arrow-io"></i>
                        </button>
                        <button
                          type="button"
                          className="view-btn tooltip
                        d-flex"
                        >
                          <i className="icon icon-screen-full"></i>
                          <span className="tooltip-text">Quick view</span>
                        </button>
                        <button type="button" className="wishlist-btn">
                          <i className="icon icon-heart"></i>
                        </button>
                      </div>
                    </div>
                    <div className="discount">10% Off</div>
                    <div className="product-detail">
                      <h3 className="product-title">
                        <a href="single-product.html">Blue Jeans pant</a>
                      </h3>
                      <div className="item-price text-primary">
                        <del className="prev-price">$45.00</del>$35.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Flash_sales;
