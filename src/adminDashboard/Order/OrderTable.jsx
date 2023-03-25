import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import OrderDeleteModal from "./OrderDeleteModal/OrderDeleteModal";
import OrderViewModal from "./orderViewModal/OrderViewModal";

const OrderTable = ({ orders }) => {
  const [orderView, setOrderView] = useState({});
  const [orderDelete, setOrderDelete] = useState({});
  const adminOrders = orders?.data;
  // console.log(orderDelete);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-solid border-2 border-black text-black m-32">
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
                  <div onClick={() => setOrderView(order)}>
                    <label htmlFor="view-order-modal" className="">
                      <AiOutlineEye className="h-6 w-6 cursor-pointer" />
                    </label>
                  </div>

                  <div onClick={() => setOrderDelete(order)}>
                    <label htmlFor="delete-order-modal" className="">
                      <RiDeleteBin6Line className="h-6 w-6 cursor-pointer" />
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          ))}

          <OrderViewModal orderView={orderView}></OrderViewModal>
          <OrderDeleteModal orderDelete={orderDelete}></OrderDeleteModal>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
