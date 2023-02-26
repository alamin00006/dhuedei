import React from "react";
import highQuality from "../../images/High-Quality.png";
import cutting from "../../images/cutting-edge-technology.png";
import onStop from "../../images/One-stop-solution.png";
import "./ChoosUs.css";

const ChooseUs = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-center">
        <div className="flex items-center">
          <div class="line mr-3"></div>
          <h1 className="text-2xl text-black font-medium">WHY CHOOSE US</h1>
          <div class="line ml-3"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-5 mt-10 text-center choose-us">
        <div className="single-choose p-5">
          <div className="flex justify-center">
            <div>
              <img src={highQuality} alt="" />
            </div>
          </div>
          <div className="text-black mt-2">
            <h2 className="choose-title font-bold text-xl">
              HIGH QUALITY SERVICE
            </h2>
            <p className="font-medium text-lg">
              Your clothes are carefully cleaned with the most efficient
              laundry.
            </p>
          </div>
        </div>
        <div className="single-choose p-5">
          <div className="flex justify-center">
            <div>
              <img src={cutting} alt="" />
            </div>
          </div>
          <div className="text-black mt-2">
            <h2 className="choose-title font-bold text-xl">
              CUTTING EDGE TECHNOLOGY
            </h2>
            <p className="font-medium text-lg">
              We use the world's most modern technology machines and high
              quality chemicals.
            </p>
          </div>
        </div>
        <div className="single-choose p-5">
          <div className="flex justify-center">
            <div>
              <img src={onStop} alt="" />
            </div>
          </div>
          <div className="text-black mt-2">
            <h2 className="choose-title font-bold text-xl">
              ONE STOP SOLUTION
            </h2>
            <p className="font-medium text-lg">
              You can do your laundry, dry cleaning, and ironing all at one
              place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
