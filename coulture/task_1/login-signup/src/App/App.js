import React from "react";
import Header from "../Header/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Billboard from "../billboard/Billboard";
import Featured_products from "../Products/products";
import L_collection from "../L-collection/L-collection";
import Subscribe from "../Subscribe/Subscribe";
import BestSelling from "../Best-selling/Best-selling";
import Testimonial from "../Testimonials/Testimonials";
import Flash_sales from "../Flash-sale/Flash-sales";
import Shoppify from "../Shoppify/Shoppify";
import Quotation from "../Quotation/Quotation";
import Latest_blog from "../Latest-blog/Latest-blog";
import Brand_collection from "../Brand-collection/Brand-collection";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="heading-section">
          <Header />
          <Billboard />
          <Featured_products />
          <L_collection />
          <Subscribe />
          <BestSelling />
          <Testimonial />
          <Flash_sales />
          <Shoppify />
          <Quotation />
          <Latest_blog />
          <Brand_collection />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
