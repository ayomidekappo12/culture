import React from "react";
import "./L-collection.css";
import "bootstrap/dist/css/bootstrap.min.css";
import collection_item1 from "../Assets/collection-item1.jpg";
import collection_item2 from "../Assets/collection-item2.jpg";
import collection_item3 from "../Assets/collection-item3.jpg";

const L_collection = () => {
  return (
    <>
      <div className="App-collection">
        <section id="latest_collection">
          <div className="container">
            <div className="product-collection row">
              <div className="col-lg-7 col-md-12 left-content">
                <div className="collection-item">
                  <div className="products-thumb">
                    <img
                      src={collection_item1}
                      alt="collection item"
                      className="large-image image-rounded"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
                    <div className="categories">casual collection</div>
                    <h3 className="item-title">street wear.</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dignissim massa diam elementum.
                    </p>
                    <div className="btn-wrap">
                      <a href="shop.html" className="d-flex align-items-center">
                        shop collection <i className="icon icon-arrow-io"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 right-content flex-wrap">
                <div className="collection-item top-item">
                  <div className="products-thumb">
                    <img
                      src={collection_item2}
                      alt="collection item"
                      className="small-image image-rounded"
                    />
                  </div>
                  <div className="col-md-6 product-entry">
                    <div className="categories">Basic Collection</div>
                    <h3 className="item-title">Basic shoes.</h3>
                    <div className="btn-wrap">
                      <a href="shop.html" className="d-flex align-items-center">
                        shop collection <i className="icon icon-arrow-io"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="collection-item bottom-item">
                  <div className="products-thumb">
                    <img
                      src={collection_item3}
                      alt="collection item"
                      className="small-image image-rounded"
                    />
                  </div>
                  <div className="col-md-6 product-entry">
                    <div className="categories">Best Selling Product</div>
                    <h3 className="item-title">woolen hat.</h3>
                    <div className="btn-wrap">
                      <a href="shop.html" className="d-flex align-items-center">
                        shop collection <i className="icon icon-arrow-io"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default L_collection;
