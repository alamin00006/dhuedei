import React, { useEffect, useState } from "react";
import { chooses } from "../../fakeData/choose";

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
      <div className="grid grid-cols-3 gap-5 mt-10 text-center choose-us">
        {chooses.map((choose) => (
          <div className="single-choose p-5">
            <div className="flex justify-center">
              <div>
                <img src={choose.icon} alt="" />
              </div>
            </div>
            <div className="text-black mt-2">
              <h2 className="choose-title font-bold text-lg">{choose.title}</h2>
              <p className="font-medium">{choose.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
