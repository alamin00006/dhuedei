import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const OrderTable = ({ orders }) => {
  const adminOrders = orders?.data;
  console.log(adminOrders);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-solid border-2 border-black text-black">
        {/* head */}
        <thead>
          <tr className="text-white">
            <th></th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Address</th>
            <th>Order Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {adminOrders.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <td>{order?.name}</td>
              <td>{order?.mobileNumber}</td>
              <td>{order?.orderDate}</td>
              <td>{order?.fullAddress}</td>
              <td>Blue</td>
              <td>
                <div className="flex space-x-4">
                  <div>
                    <label htmlFor="view-house-modal" className="">
                      <AiOutlineEye className="h-6 w-6 cursor-pointer" />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="deletemodal" className="">
                      <RiDeleteBin6Line className="h-6 w-6 cursor-pointer" />
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
