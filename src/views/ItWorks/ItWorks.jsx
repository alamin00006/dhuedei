import React from "react";
import "./ItWorks.css";
import step1 from "../../images/Step-1.jpeg";
import step2 from "../../images/Step-2.jpeg";
import step3 from "../../images/Step-3.jpeg";
import step4 from "../../images/Step-4.jpeg";
const ItWorks = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-center">
        <div className="flex items-center">
          <div class="line mr-3"></div>
          <h1 className="text-2xl text-black font-medium">HOW IT WORKS</h1>
          <div class="line ml-3"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 mt-10 step-image ">
        <div className="border border-indigo-600"> 
          <img className="mb-4 w-full h-80" src={step1} alt="" />
        </div>
        <div className="border border-indigo-600"> 
          <img className="mb-4 w-full h-80" src={step2} alt="" />
        </div>
        <div className="border border-indigo-600">
          <img className="mb-4 w-full h-80" src={step3} alt="" />
        </div>
        <div className="border border-indigo-600">
          <img className="mb-4 w-full h-80" src={step4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ItWorks;
