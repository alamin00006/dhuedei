import React from "react";
import "./Services.css";
import pricListImg from "../../images/price-list1.png";
const Services = () => {
  return (
    <div className="mx-44">
      <h1 className="text-3xl text-cyan-500 font-bold">Services & Pricing</h1>
      <div className="divider before:bg-cyan-500 after:bg-cyan-500 mt-8 font-bold text-xl text-cyan-600">
        Price Table
      </div>
      <div className="flex justify-center">
        <div>
          <img className="w-full" src={pricListImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
