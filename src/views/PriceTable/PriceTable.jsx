import React from "react";

const PriceTable = ({ itmes }) => {
  const services = itmes?.data;
  console.log(services);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Item Name</th>
            <th>IRON (TK)</th>
            <th>WASH (TK)</th>
            <th>DRY CLEAN (TK)</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr className="text-black" key={service?._id}>
              <th>{index + 1}</th>
              <td>{service?.itemName}</td>
              <td>{service?.ironPerPrice} (TK)</td>
              <td>{service?.washPerPrice} (TK)</td>
              <td>{service?.dryCleanPerPrice} (TK)</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
