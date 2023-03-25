import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const ItemDeleteModal = ({ deleteItem, refetch }) => {
  const handleDelete = async () => {
    try {
      const data = await axios.delete(
        `https://dhuenin-server-side.onrender.com/api/v1/item/${deleteItem?._id}`,
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
  // console.log(deleteItem);
  return (
    <div>
      <input type="checkbox" id="delete-item-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-200">
          <h3 className="font-bold text-lg">Are You Sure This Item Delete</h3>
          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="delete-item-modal" className="btn">
                Cancel
              </label>
            </div>
            <div onClick={handleDelete} className="modal-action">
              <label htmlFor="delete-item-modal" className="btn">
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDeleteModal;
