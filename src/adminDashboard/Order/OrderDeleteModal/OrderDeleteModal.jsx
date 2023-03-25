import React from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const OrderDeleteModal = ({ orderDelete, refetch }) => {
  const handleDelete = async () => {
    try {
      const data = await axios.delete(
        `https://dhuenin-server-side.onrender.com/api/v1/order/${orderDelete?._id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(data.data.message);
      refetch();
    } catch (error) {
      return toast.error(error.response.data.message);
    }
    
  };
  return (
    <div>
      <input type="checkbox" id="delete-order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-200">
          <h3 className="font-bold text-lg">Are You Sure This Item Delete</h3>
          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="delete-order-modal" className="btn">
                Cancel
              </label>
            </div>
            <div onClick={handleDelete} className="modal-action">
              <label htmlFor="delete-order-modal" className="btn">
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer className="toast-position" position="top-center"/> */}
    </div>
  );
};

export default OrderDeleteModal;
