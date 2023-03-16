import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ItemAddModal = () => {
  const handleNewItem = async (e) => {
    e.preventDefault();

    const productAdd = {
      itemName: e.target.itemName.value,
      ironPerPrice: e.target.ironPerPrice.value,
      washPerPrice: e.target.washPerPrice.value,
      dryCleanPerPrice: e.target.dryCleanPerPrice.value,
    };

    try {
      const data = await axios.post(
        "http://localhost:5000/api/v1/item",
        productAdd
      );
      // refetch()
      toast.success(data.data.message);
    } catch (error) {
      console.log(error);
      return toast.warn(error.response.data.message);
    }

    e.target.reset();
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Item input</h3>
          <form onSubmit={handleNewItem}>
            <div>
              <label className="text-black">Item Name</label>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                className="border rounded mt-2 text-black pl-3"
                name="itemName"
              />
              <label className="text-black">Iron Price</label>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                className="border rounded mt-2 text-black pl-3"
                name="ironPerPrice"
              />
              <label className="text-black">Wash Price</label>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                className="border rounded mt-2 text-black pl-3"
                name="washPerPrice"
              />
              <label className="text-black">Dry Clean Price</label>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                className="border rounded mt-2 text-black pl-3"
                name="dryCleanPerPrice"
              />
            </div>
            <div className="flex items-center justify-end">
              <div className="modal-action">
                <label
                  htmlFor="my-modal-6"
                  className="bg-black px-5 py-3 rounded-lg cursor-pointer font-bold text-white"
                >
                  CANCEL
                </label>
              </div>
              <div className="mt-6">
                <input
                  className="bg-rose-500 px-5 py-3 rounded-lg cursor-pointer font-bold text-white"
                  type="submit"
                  value="ITEM ADD"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ItemAddModal;
