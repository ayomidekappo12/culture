import React from "react";
import "./Testimonials.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Testimonial() {
  return (
    <>
      <div className="App-testimonial">
        <section id="testimonials" className="padding-large no-padding-bottom">
          <div className="container">
            <div className="reviews-content">
              <div className="row d-flex flex-wrap">
                <div className="col-md-2">
                  <div className="review-icon">
                    <i className="icon icon-right-quote"></i>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="swiper testimonial-swiper overflow-hidden">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testimonial-detail">
                          <p>
                            “Dignissim massa diam elementum habitant fames. Id
                            nullam pellentesque nisi, eget cursus dictumst
                            pharetra, sit. Pulvinar laoreet id porttitor egestas
                            dui urna. Porttitor nibh magna dolor ultrices
                            iaculis sit iaculis.”
                          </p>
                          <div className="author-detail">
                            <div className="name">By Maggie Rio</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testimonial-detail">
                          <p>
                            “Dignissim massa diam elementum habitant fames. Id
                            nullam pellentesque nisi, eget cursus dictumst
                            pharetra, sit. Pulvinar laoreet id porttitor egestas
                            dui urna. Porttitor nibh magna dolor ultrices
                            iaculis sit iaculis.”
                          </p>
                          <div className="author-detail">
                            <div className="name">By John Smith</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-arrows">
                    <button className="prev-button">
                      <i className="icon icon-arrow-left"></i>
                    </button>
                    <button className="next-button">
                      <i className="icon icon-arrow-right"></i>
                    </button>
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

export default Testimonial;
