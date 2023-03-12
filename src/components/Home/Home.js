import React from "react";
import Banner from "../../views/Banner/Banner";
import ChooseUs from "../../views/ChooseUs/ChooseUs";
import FreeQuentlyAsk from "../../views/FreeQuentlyAsk/FreeQuentlyAsk";
import ItWorks from "../../views/ItWorks/ItWorks";
import Packages from "../../views/Packages/Packages";

const Home = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <ItWorks />
      </section>
      <section>
        <ChooseUs />
      </section>
      <section>
        <Packages />
      </section>
      <section>
        <FreeQuentlyAsk />
      </section>
    </div>
  );
};

export default Home;
