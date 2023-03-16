import React from "react";
import ItemAddModal from "./ItemAddModal";

const ItemManage = () => {
  return (
    <div>
      <h1>
        <label
          htmlFor="my-modal-6"
          className="bg-rose-500 px-5 py-3 rounded-lg cursor-pointer font-bold text-white"
        >
          ITEM ADD
        </label>
      </h1>
      <ItemAddModal />
    </div>
  );
};

export default ItemManage;
