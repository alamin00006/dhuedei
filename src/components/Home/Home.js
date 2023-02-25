import React from "react";
import Banner from "../../views/Banner/Banner";
import ItWorks from "../../views/ItWorks/ItWorks";

const Home = () => {
  return (
    <div className="mx-44">
      <section>
        <Banner />
      </section>
      <section>
        <ItWorks />
      </section>
    </div>
  );
};

export default Home;
