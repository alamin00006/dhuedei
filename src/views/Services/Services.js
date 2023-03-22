import React from "react";
import "./Services.css";
// import pricListImg from "../../images/price-list1.png";
import PriceTable from "../PriceTable/PriceTable";
import useItems from "../../hooks/useItems";

const Services = () => {
  const [itmes, refetch, isLoading] = useItems();

  console.log(itmes);
  return (
    <div className="w-4/5 m-0 mx-auto">
    
      <div className="divider before:bg-cyan-500 after:bg-cyan-500 mt-8 font-bold text-xl text-cyan-600">
      Services &  Price Table
      </div>
      <div className="flex justify-center">
        {/* <div>
          <img className="w-full" src={pricListImg} alt="" />
        </div> */}
      </div>
      {itmes ? <PriceTable itmes={itmes}></PriceTable> : <></>}
    </div>
  );
};

export default Services;
