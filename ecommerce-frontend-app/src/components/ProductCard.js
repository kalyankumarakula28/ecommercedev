import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      
      <div
        className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="../images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image d-flex align-items-center justify-content-center">
            <img
              src="../images/watch.jpg"
              className="img-fluid "
              alt="Product_image"
            />
           
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5>Kids Headphone Bulk 10 pack multi colored for students</h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid===12?"d-block":"d-none"}`}>
              automatically monitor your heart rate in real-time every 5 minuets
              and manually detect your SpO2 Saturation. It can also auto-track
              your sleep via smartwatch and our App and analyze your sleep
              quality(deep sleep, light sleep and wake up time) to help you
              develop a healthier lifestyle. Please use the app to connect your
              phone and smartwatch.
            </p>
            <p className="price">₹100</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="../images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="../images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="../images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
