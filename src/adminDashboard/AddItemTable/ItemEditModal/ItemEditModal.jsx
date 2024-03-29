import axios from "axios";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const ItemEditModal = ({ editItem, refetch }) => {
  const handleEditItem = async (event) => {
    event.preventDefault();

    const productEdit = {
      itemName: event.target.itemName.value,
      ironPerPrice: event.target.ironPerPrice.value,
      washPerPrice: event.target.washPerPrice.value,
      dryCleanPerPrice: event.target.dryCleanPerPrice.value,
    };
    try {
      const data = await axios.patch(
        `https://dhuenin-server-side.onrender.com/api/v1/item/${editItem?._id}`,
        productEdit
      );

      toast.success(data?.data?.message);
      refetch();
    } catch (error) {
      console.log(error);
      return toast.warn(error?.response?.data?.message);
    }

    event.target.reset();
  };
  // console.log(editItem);

  return (
    <div>
      <input type="checkbox" id="my-itemedit-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Item Update</h3>
          <form onSubmit={handleEditItem}>
            <div>
              <label className="text-black">Item Name</label>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                className="border rounded mt-2  pl-3 "
                name="itemName"
                defaultValue={editItem?.itemName}
              />
              <label className="text-black">Iron Price</label>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                className="border rounded mt-2  pl-3"
                name="ironPerPrice"
                defaultValue={editItem.ironPerPrice}
              />
              <label className="text-black">Wash Price</label>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                className="border rounded mt-2  pl-3"
                name="washPerPrice"
                defaultValue={editItem.washPerPrice}
              />
              <label className="text-black">Dry Clean Price</label>
              <input
                type="text"
                style={{ width: "100%", height: "40px" }}
                className="border rounded mt-2  pl-3"
                name="dryCleanPerPrice"
                defaultValue={editItem.dryCleanPerPrice}
              />
            </div>
            <div className="flex items-center justify-end">
              <div className="modal-action">
                <label
                  htmlFor="my-itemedit-modal"
                  className="bg-black px-5 py-3 rounded-lg cursor-pointer font-bold text-white"
                >
                  CANCEL
                </label>
              </div>
              <div className="mt-6">
                <button type="submit" className="bg-rose-500 px-5 py-3 rounded-lg cursor-pointer font-bold text-white">ITEM UPDATE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <ToastContainer className="toast-position" position="top-center"/> */}
    </div>
  );
};

export default ItemEditModal;
