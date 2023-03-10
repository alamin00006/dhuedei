import React from "react";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/Logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="navbar bg-base-100 size   m-0 mx-auto sticky top-0 z-50 shadow-lg shadow-white-500/50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item </a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className=" text-xl">
          <img className="w-28" src={logo} alt="" />
        </Link>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyU</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              GALLERY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              NEWS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              BLOG
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-base px-3 text-black font-normal rounded-full py-2"
            >
              ABOUTUS
            </NavLink>
          </li>
          <li>
            <Link
              to="/order"
              className=" px-4 bg-rose-500 text-white font-normal rounded-full py-2"
            >
              ORDER
            </Link>
          </li>
        </ul>
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
  );
};

export default Header;
