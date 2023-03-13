import React from "react";

const ItemAddModal = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Item input</h3>
          <div>
            <label className="text-black">Item Name</label>
            <input
              type="text"
              style={{ width: "100%", height: "40px" }}
              className="border rounded mt-2"
            />
            <label className="text-black">Iron Price</label>
            <input
              type="text"
              style={{ width: "100%", height: "40px" }}
              className="border rounded mt-2"
            />
            <label className="text-black">Wash Price</label>
            <input
              type="text"
              style={{ width: "100%", height: "40px" }}
              className="border rounded mt-2"
            />
            <label className="text-black">Dry Clean Price</label>
            <input
              type="text"
              style={{ width: "100%", height: "40px" }}
              className="border rounded mt-2"
            />
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemAddModal;
