import React from "react";
import "./Billboard.css";
import "./swiper-9.3.1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import banner2 from "../Assets/banner2.jpeg";

function billboard() {
  return (
    <>
      <div className="App-billboard">
        <section id="billboard" className="overflow-hidden">
          <button className="button-prev">
            <i className="icon icon-chevron-left" />
          </button>
          <button className="button-next">
            <i className="icon icon-chevron-right" />
          </button>
          <div className="swiper main-swiper">
            <div className="swiper-wrapper">
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${banner2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="banner-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h2 className="banner-title">Summer Collection</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed eu feugiat amet, libero ipsum enim pharetra
                          hac.
                        </p>
                        <div className="btn-wrap">
                          <a
                            href="shop.html"
                            className="btn btn-light btn-medium d-flex align-items-center"
                            tabIndex="0"
                          >
                            Shop it now <i className="icon icon-arrow-io" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                style={{
                  backgroundImage: `url(${banner2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="banner-content">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h2 className="banner-title">Casual Collection</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed eu feugiat amet, libero ipsum enim pharetra
                          hac.
                        </p>
                        <div className="btn-wrap">
                          <a
                            href="shop.html"
                            className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center"
                            tabIndex="0"
                          >
                            Shop it now <i className="icon icon-arrow-io" />
                          </a>
                        </div>
                      </div>
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
}

export default billboard;
