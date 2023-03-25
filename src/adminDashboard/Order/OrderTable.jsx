import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import OrderDeleteModal from "./OrderDeleteModal/OrderDeleteModal";
import OrderViewModal from "./orderViewModal/OrderViewModal";

const OrderTable = ({ orders, refetch }) => {
  const [orderView, setOrderView] = useState({});
  const [orderDelete, setOrderDelete] = useState({});
  const adminOrders = orders?.data;
 
  return (
    <div className="">
      <table className="table w-full border-solid border-2 border-black text-black">
        {/* head */}
        <thead>
          <tr className="text-white">
            <th>No</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {adminOrders.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <td>{order?.name}</td>
              <td>{order?.mobileNumber}</td>
              <td>{order?.orderDate?.split('T')?.[0]}</td>
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
          <OrderDeleteModal
            orderDelete={orderDelete}
            refetch={refetch}
          ></OrderDeleteModal>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
