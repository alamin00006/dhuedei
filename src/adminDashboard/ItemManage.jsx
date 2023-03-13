import React from "react";
import ItemAddModal from "./ItemAddModal";

const ItemManage = () => {
  return (
    <div>
      <h1>
        <label htmlFor="my-modal-6" className="btn">
          Item Add
        </label>
      </h1>
      <ItemAddModal />
    </div>
  );
};

export default ItemManage;
