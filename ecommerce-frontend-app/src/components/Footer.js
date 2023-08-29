import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center justify-content-center">
            <div className="col-4">
              <div className="footer-top-data d-flex gap-30 align-items-center ">
                <img src="../images/newsletter.png" alt="news-letter" />
                <h4 className="mb-0 text-white">Sign Up For A News Letter</h4>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscibe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h5 className="text-white mb-4">Contact Us</h5>
              <div className="text-white fs-6">
                <address>
                  SGS Solutuions
                  <br />
                  KPHB Phase-1
                  <br />
                  Hyderabad
                  <br />
                  Telangana
                  <br />
                  Pincode:500055
                  <br />
                  <a
                    href="mailto:Synoshereglobalsolutions@gmail.com"
                    className="mt-2 d-block mb-2 text-white"
                  >
                    synoshereglobalsolutions@gmail.com
                  </a>
                </address>
                <div className="social_icons d-flex align-items-center gap-15">
                  <a href="linked">
                    <BsLinkedin className="text-white fs-5" />
                  </a>
                  <a href="insta">
                    <BsInstagram className="text-white fs-5" />
                  </a>
                  <a href="github">
                    <BsGithub className="text-white fs-5" />
                  </a>
                  <a href="youtube">
                    <BsYoutube className="text-white fs-5" />
                  </a>
                  <a href="twitter">
                    <BsTwitter className="text-white fs-5" />
                  </a>
                  <a href="fb">
                    <BsFacebook className="text-white fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-white mb-4">Information</h5>
              <div className="d-flex flex-column">
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/termsAndconditions" className="text-white py-2 mb-1">
                  Terms Of Service
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-white mb-4">Account</h5>
              <div className="d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-white mb-4">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white ">
                {" "}
                &copy; {new Date().getFullYear()}:Powered By Sgs Solutuions
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
