import React from "react";

const OrderDeleteModal = ({ orderDelete }) => {
  console.log(orderDelete);
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
            <div className="modal-action">
              <label htmlFor="delete-order-modal" className="btn">
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteModal;
