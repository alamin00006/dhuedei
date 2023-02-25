import React from "react";
import "./ItWorks.css";
import step1 from "../../images/Step-1.jpg";
import step2 from "../../images/Step-2.jpg";
import step3 from "../../images/Step-3.jpg";
import step4 from "../../images/Step-4.jpg";
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
      <div className="grid grid-cols-4 gap-x-5 mt-10 step-image">
        <div>
          <img src={step1} alt="" />
        </div>
        <div>
          <img src={step2} alt="" />
        </div>
        <div>
          <img src={step3} alt="" />
        </div>
        <div>
          <img src={step4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ItWorks;
