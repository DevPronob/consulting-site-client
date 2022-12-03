import React from "react";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../Shared/Navbar.css";
import logo from '../../images/logo.png'
const Navbar = () => {
  return (
    <div>
      {/* upper navbar */}
      <div className="topbar__parant">
        <div className="topbar__left">
          <div className="topbar__items">
            <BiMap className="topbar__icon" />
            <p>120 F 2th Yt, Melbone NY 1259</p>
          </div>
          <div className="topbar__items">
            <AiOutlineMail className="topbar__icon" />
            <p>email@example.com</p>
          </div>
        </div>
        <div className="topbar__right">
            <div className="topbar__items">
              <AiTwotonePhone className="topbar__icon" />
              <p>Hotline Number:210-9856988</p>
            </div>
            <div className="topbar__items">
              <BsFacebook className="topbar__icon"/>
              <AiFillTwitterCircle className="topbar__icon" />
              <AiFillYoutube  className="topbar__icon"/>
            </div>
          </div>
      </div>

      {/* main navbar */}

      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-4">
  <div class="container-fluid">
  <img className="navbar__logo" src={logo} alt="Girl in a jacket" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav navbar__border ms-auto me-4 mb-2 mb-lg-0 border-right-0 border-dark">
        <li class="nav-item">
          <a class="nav-link active fs-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="#">Pages</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-5" href="#">Blog</a>
        </li>
       
        
      </ul>
      <div class="d-flex navbar__sideItem">
        <FaSearch className="navbar__icon"/>
        <AiOutlineShoppingCart className="navbar__icon"/>
        <a target="_self" class="header-btn" href="https://radiustheme.com/demo/wordpress/themes/finbuzz/team/"><span class="btn-img"><img width="24" height="20" src="https://radiustheme.com/demo/wordpress/themes/finbuzz/wp-content/themes/finbuzz/assets/element/shape36.png" alt="shape"/></span><span class="btn-text">Get Consulting</span></a>
      </div>
    </div>
  </div>
</nav>
      </div>





      
    </div>
  );
};

export default Navbar;
