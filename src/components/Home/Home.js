import React from "react";
import AskQuestions from "../../views/AskQuestions/AskQuestions";
import Banner from "../../views/Banner/Banner";
import BannerNew from "../../views/BannerNew/BannerNew";
import ChooseUs from "../../views/ChooseUs/ChooseUs";
import FreeQuentlyAsk from "../../views/FreeQuentlyAsk/FreeQuentlyAsk";

import ItWorks from "../../views/ItWorks/ItWorks";
import Packages from "../../views/Packages/Packages";

const Home = () => {
  return (
    <div className="lg:mx-44">
      {/* <BannerNew></BannerNew> */}
      <Banner />

      <ItWorks />

      <ChooseUs />

      <Packages />

      <FreeQuentlyAsk />
      {/* <AskQuestions></AskQuestions> */}
    </div>
  );
};

export default Home;
