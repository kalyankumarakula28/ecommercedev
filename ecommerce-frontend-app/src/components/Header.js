import React from "react";
import { NavLink, Link } from "react-router-dom";
import { DiGitCompare } from "react-icons/di";
import { AiOutlineHeart } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { PiShoppingCart } from "react-icons/pi";

import Color from "./Color";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1 px-3 ">
        <div className="container--xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping over ₹1000 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-white text-end mb-0">
                Hotline:
                <a className="text-white" href="tel:+91 9603638099">
                  +91 9603638099
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper bg-white py-2 px-3">
        <div className="container--xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <Link to="/">
                <img
                  src="../images/logo.jpg"
                  className="logo-img w-50"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="col-5">
              <div className="input-group d-flex align-items-center justify-content-center ">
                <input
                  type="text"
                  className="form-control py-2 border-success"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-text py-2" id="basic-addon2">
                  <button className="header-search-button ">Search</button>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-black"
                  >
                    <DiGitCompare size={"38px"} />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-black"
                  >
                    <AiOutlineHeart size={"28px"} />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-black"
                  >
                    <BiSolidUserCircle size={"32px"} />
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-black"
                  > <div className="d-flex flex-column gap-10">
                   
                    <PiShoppingCart size={"32px"} />
                    <p className="mb-0">Cart</p>
                    </div>
                      <span className="badge bg-white text-dark">0</span>
                   
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-1">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div className="gap-15">
                  <div class="dropdown ">
                    <button
                      class="btn  dropdown-toggle  border-0 gap-10 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="../images/menu.svg" alt="shop-categories" />
                      <span> Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu ">
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white " to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/"> Home</NavLink>
                    <NavLink to="/product"> Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
