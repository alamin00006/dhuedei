import React from "react";

const OrderViewModal = ({ orderView }) => {
  console.log(orderView);

  return (
    <div>
      <input type="checkbox" id="view-order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-200">
          <h3 className="font-bold text-lg">Are You Sure This Item view</h3>
          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="view-order-modal" className="btn">
                Cancel
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor="view-order-modal" className="btn">
                Yes
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderViewModal;
