import axios from "axios";
import React from "react";

import { toast, ToastContainer } from "react-toastify";
import Services from "../Services/Services";
const Order = () => {
  const handleOrderSubmit = async (event) => {
    event.preventDefault();
    const orderData = {
      name: event.target.name.value,
      mobileNumber: event.target.mobileNumber.value,
      orderDate: event.target.date.value,
      fullAddress: event.target.fullAddress.value,
      orderNote: event.target.orderNote.value,
    };
    try {
      const { data } = await axios.post(
        `https://dhuenin-server-side.onrender.com/api/v1/order`,
        orderData
      );
      toast.success("Thanks For Order, We Will Contact Soon");
    } catch (error) {
      return toast.warn(error.response.data.message);
    }
    event.target.reset();
  };

  return (
    <div>
      <div id="order">
        <h1 className="text-5xl text-center w-1/2 text-orange-400 my-5 mx-auto shadow-2xl border border-spacing-1 border-cyan-300 p-5 rounded-md  mb-10">
          Send Order
        </h1>

        <form
          className="flex flex-col lg:w-1/2 mx-auto shadow-2xl border border-spacing-1 border-cyan-300 p-5 rounded-md  mb-10"
          onSubmit={handleOrderSubmit}
        >
          <input
            type="text"
            className="input  w-full px-5 shadow-xl border border-indigo-200 my-5  text-black"
            name="name"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="input  w-full px-5 shadow-md border border-indigo-200 bg-none my-5  text-black"
            name="mobileNumber"
            placeholder="Your Mobile Number"
          />
          <input
            className="input w-full px-5 my-5 border border-indigo-200  text-black"
            type="date"
            name="date"
            placeholder="Select Date"
            required
          />
          <textarea
            type="text"
            className="input w-full p-5 h-32 shadow-md border border-indigo-200  my-5 text-black"
            name="fullAddress"
            placeholder="Your Full Address"
          />
          <textarea
            type="text"
            className="input w-full p-5 h-32 shadow-md border border-indigo-200  my-5 text-black"
            name="orderNote"
            placeholder="Write your Order Note(optional)..."
          />

          <input
            className="btn btn-accent my-5 w-20 mx-auto px-5"
            type="submit"
          />
        </form>
      </div>
      <div>
        <div className="w-4/5 m-0 mx-auto">
          
          <div className="flex justify-center"></div>
         <Services/>
        </div>
      </div>
      <ToastContainer className="toast-position" position="top-center"/>
    </div>
  );
};

export default Order;
