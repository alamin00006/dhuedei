import React from "react";
import { Link } from "react-router-dom";
import Map from "../Map/Map";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { FaHandsHelping } from "react-icons/fa";
import { TiLocationArrowOutline } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-blue-200	 pt-5 pb-20 mt-10">
      <div className="flex  lg:mx-44 justify-center">
        <div className="hidden md:block">
          <Map></Map>
        </div>
        <div className=" flex   ml-8 text-black">
          <div className="">
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <ul>
              <li className="mt-2">
                <Link to="" className="font-medium text-lg">
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link to="" className="font-medium text-lg">
                  Blog
                </Link>
              </li>
              <li className="mt-2">
                <Link to="" className="font-medium text-lg">
                  Privacy Policy
                </Link>
              </li>
              <li className="mt-2">
                <Link to="" className="font-medium text-lg">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
          <div className="ml-16">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <div className="flex mt-2 items-center">
              <div>
                <HiDevicePhoneMobile className="h-5 w-5" />
              </div>
              <p className="ml-1 font-normal">+8801645-16565</p>
            </div>
            <div className="flex mt-2 items-center">
              <div>
                <FaHandsHelping className="w-5 h-5" />
              </div>
              <p className="ml-1 font-normal">nazmulhasanall92@gmail.com</p>
            </div>
            <div className="flex mt-2">
              <div>
                <TiLocationArrowOutline className="w-6 h-6" />
              </div>
              <p>Patanish Bajar Hajigonj</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
