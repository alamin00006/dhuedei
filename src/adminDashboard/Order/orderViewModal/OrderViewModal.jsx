import React from "react";

const OrderViewModal = ({ orderView }) => {
  console.log(orderView);

  return (
    <div>
      <input type="checkbox" id="view-order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-slate-200">
          <h3 className="font-bold text-lg"> Order view</h3>
          <h2>Name: {orderView.name}</h2>
          <h2>Mobile: {orderView.mobileNumber}</h2>
          <h2>Order Date: {orderView.orderDate}</h2>
          <h2>Order Note: {orderView.orderNote}</h2>

          <div className="flex justify-end">
            <div className="modal-action">
              <label htmlFor="view-order-modal" className="btn bg-black">
                Cancel
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor="view-order-modal" className="btn bg-black">
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
