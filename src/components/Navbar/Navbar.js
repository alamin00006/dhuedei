import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <nav className="mx-44">
        <div className="navbar bg-base-100 ">
          <div className="navbar-start">
            <img style={{ width: "170px" }} src={logo} alt="" />
          </div>

          <div className="navbar-center navbar-list hidden lg:block">
            <NavLink
              to="/"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              HOME
            </NavLink>
            <NavLink
              to="/services"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/gallery"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              GALLERY
            </NavLink>
            <NavLink
              to="/news"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              NEWS
            </NavLink>
            <NavLink
              to="/blog"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              BLOG
            </NavLink>
            <NavLink
              to="/about"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              ABOUTUS
            </NavLink>
            <Link
              to="/order"
              className=" px-4  text-white font-normal rounded-full py-2"
            >
              ORDER
            </Link>
          </div>
          <div className="navbar-end">
            <div class="vl"></div>
            <div class="vl ml-5"></div>
            <div>
              <FaFacebookF
                title="Follow on Facebook"
                className="h-5 w-6 mx-2 text-slate-400 hover:text-black hover:cursor-pointer"
              />
            </div>
            <div>
              <IoLogoInstagram
                title="Follow on Instagram"
                className="h-6 w-6 mx-1 text-slate-400 hover:text-black hover:cursor-pointer"
              />
            </div>
            <div>
              <AiFillLinkedin
                title="Follow on Linkedin"
                className="h-6 w-6 mx-1 text-slate-400 hover:text-black hover:cursor-pointer"
              />
            </div>
            <div>
              <AiFillYoutube
                title="Follow on Youtube"
                className="h-6 w-6 mx-1 text-slate-400 hover:text-black hover:cursor-pointer"
              />
            </div>
          </div>
        </div>
        <hr />
      </nav>
    </div>
  );
};

export default Navbar;
