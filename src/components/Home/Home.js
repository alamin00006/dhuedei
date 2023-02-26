import React from "react";
import Banner from "../../views/Banner/Banner";
import ChooseUs from "../../views/ChooseUs/ChooseUs";
import ItWorks from "../../views/ItWorks/ItWorks";
import Packages from "../../views/Packages/Packages";

const Home = () => {
  return (
    <div className="mx-44">
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
    </div>
  );
};

export default Home;
