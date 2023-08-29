import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import Meta from "../components/Meta";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Meta title={"Home"} />
      <Container class1="home-wrapper-1 py-3">
        <div className="row">
          <div className="col-6">
            <div className="main-banner   p-2">
              <img
                src="images/grocery.jpeg"
                alt="main banner"
                className="img-fluid main-banner-img rounded-3"
              />
              {/*   <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+Pro.</h5>
                  <p> From ₹999.00 0r ₹41.62/mo</p>
                  <Link className="button">Buy Now</Link>
                </div>*/}
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner p-2">
                <img
                  src="images/all_grocery.jpeg"
                  alt="small banner"
                  className="img-fluid rounded-3"
                />
                {/*} <div className="small-banner-content position-absolute">
                    <h4>15%</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the latest brand <br />
                      styles and colors
                    </p>
                </div>*/}
              </div>

              <div className="small-banner  p-2">
                <img
                  src="images/dog_products.jpeg"
                  alt="small banner"
                  className="img-fluid rounded-3"
                />
                {/*   <div className="small-banner-content position-absolute">
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      {" "}
                      High-fedility playback 7<br />
                      Ultra-low distortion
                    </p>
                  </div>*/}
              </div>

              <div className="small-banner p-2">
                <img
                  src="images/mobiles.jpeg"
                  alt="small banner"
                  className="img-fluid rounded-3"
                />
                {/*<div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptops max</h5>
                    <p>
                      
                      From ₹499.00 <br /> 0r ₹64.62/mo.
                    </p>
                  </div>*/}
              </div>

              <div className="small-banner position-relative p-2">
                <img
                  src="images/dairy_products.jpeg"
                  alt="small banner"
                  className="img-fluid rounded-3"
                />
                {/*<div className="small-banner-content position-absolute">
                    <h4>Buy IPad Air.</h4>
                    <h5>iPad S13+Pro.</h5>
                    <p>
                      From ₹599.00 <br /> 0r ₹49.62/mo
                    </p>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-4">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.Image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/*} <Container class1="home-wrapper-1 py-5">
        <div className="row ">
          <div className="col-12">
            <div className="services px-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="../images/service.png" alt="servies" />
                <div>
                  <h5> Free Shipping</h5>
                  <p className="mb-0">From All Orders over ₹100 </p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="../images/service-02.png" alt="servies" />
                <div>
                  <h5>Daily Surprise Offers</h5>
                  <p className="mb-0">Sava Up to 25% off</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="../images/service-03.png" alt="servies" />
                <div>
                  <h5>Support 24/7</h5>
                  <p className="mb-0">Shop With an expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="../images/service-04.png" alt="servies" />
                <div>
                  <h5>Affordable Prices</h5>
                  <p className="mb-0">Get Factory direct price</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="../images/service-05.png" alt="servies" />
                <div>
                  <h5>Secure Payments</h5>
                  <p className="mb-0">100% Projected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
            </Container>*/}

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center ">
              <div className="d-flex  align-items-center">
                <div>
                  <h6>Music</h6>
                  <p>10 Items</p>
                </div>
                <img src="../images/headphone.jpg" alt="camera" />
              </div>

              <div className="d-flex  align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="../images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="../images/tv.jpg" alt="camera" />
              </div>

              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Watch</h6>
                  <p>10 Items</p>
                </div>
                <img src="../images/speaker.jpg" alt="camera" />
              </div>

              <div className="d-flex  align-items-center">
                <div>
                  <h6>Music</h6>
                  <p>10 Items</p>
                </div>
                <img src="../images/headphone.jpg" alt="camera" />
              </div>

              <div className="d-flex  align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="../images/camera.jpg" alt="camera" />
              </div>

              <div className="d-flex  align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="../images/tv.jpg" alt="camera" />
              </div>

              <div className="d-flex align-items-center">
                <div>
                  <h6>Smart Watch</h6>
                  <p>10 Items</p>
                </div>
                <img src="../images/speaker.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading"> Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-3">
            <div className="famous-card ">
              <img
                className="img-fluid famous-img"
                src="../images/famous-1.webp"
                alt="famous"
              />
              <div className="famous-content ">
                <h6>Big Screen</h6>
                <h4>Smart Watch Series 7</h4>
                <p>From ₹ 399 or ₹16.62/mo for 24 mo.*</p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card ">
              <img
                className="img-fluid famous-img"
                src="../images/famous-2.webp"
                alt="famous"
              />
              <div className="famous-content ">
                <h6>Studio Display</h6>
                <h4>600 nits Of Brightness</h4>
                <p>27-Inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card ">
              <img
                className="img-fluid famous-img"
                src="../images/famous-3.webp"
                alt="famous"
              />
              <div className="famous-content">
                <h6>Smart Phones</h6>
                <h4>SmartPhone 13 Pro</h4>
                <p>
                  Now In Green. From $999.00 or $41.62/mo. for 24 mo Footnote*
                </p>
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card ">
              <img
                className="../img-fluid famous-img"
                src="images/famous-4.webp"
                alt="famous"
              />
              <div className="famous-content ">
                <h6>Home Speakers</h6>
                <h4>Room Filling Sound</h4>
                <p>From $699.00 to $116.62/mo. for 12 </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper  card-wrapper">
              <Marquee className="d-flex  ">
                <div>
                  <img
                    src="../images/grocery_brand_1.jpg"
                    className="marquee-img"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="../images/supermarket-logo.jpg"
                    className="marquee-img"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="../images/grocery_brand_3.jpg"
                    className="marquee-img"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="../images/grocery_brand_4.jpg"
                    className="marquee-img"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="../images/grocery_brand_5.jpg"
                    className="marquee-img"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="../images/grocery_brand_6.jpg"
                    className="marquee-img"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="../images/grocery_brand_7.jpg"
                    className="marquee-img"
                    alt="brand"
                  />
                </div>
                <div>
                  <img
                    src="../images/food-logo-logo-of-food-brand.jpg"
                    className="marquee-img"
                    alt="brand"
                  />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading"> Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
