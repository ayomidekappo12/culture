import React from "react";
import Header from "../Header/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap grid.css";
import Billboard from "../Billboard/Billboard";
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
import Shipping from "../Shipping/Shipping";
import Footer from "../Footer/Footer";
import ErrorBoundary from "../ErrorBoundary";
import Footer_bottom from "../Footer-bottom/Footer-bottom";

function App() {
  return (
    <React.Fragment>
      <ErrorBoundary>
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
            <Shipping />
            <Footer />
            <Footer_bottom />
          </div>
        </div>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default App;
