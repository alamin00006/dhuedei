import React from "react";
import student from "../../images/Student.png";
import standard from "../../images/Standard.png";
import premium from "../../images/Standard.png";
import "./Packeges.css";
const Packages = () => {
  return (
    <div className="mt-12 mx-16">
      <div>
        <div className="flex justify-center">
          <div className="flex items-center">
            <div class="line mr-3"></div>
            <h1 className="text-2xl text-black font-medium">PACKAGES</h1>
            <div class="line ml-3"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  gap-2 mt-10 packages-image">
          <div>
            <img src={student} alt="" />
          </div>
          <div>
            <img src={standard} alt="" />
          </div>
          <div>
            <img src={premium} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
