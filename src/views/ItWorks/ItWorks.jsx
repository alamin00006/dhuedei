import React from "react";
import "./ItWorks.css";
import step1 from "../../images/Step-1.JPG";
import step2 from "../../images/Step-2.JPG";
import step3 from "../../images/Step-3.JPG";
import step4 from "../../images/Step-4.JPG";
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 mt-10 step-image">
        <div>
          <img className="mb-4 w-full" src={step1} alt="" />
        </div>
        <div>
          <img className="mb-4 w-full" src={step2} alt="" />
        </div>
        <div>
          <img className="mb-4 w-full" src={step3} alt="" />
        </div>
        <div>
          <img className="mb-4 w-full" src={step4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ItWorks;
