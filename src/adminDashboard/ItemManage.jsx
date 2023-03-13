import React from "react";
import AddItemTable from "./AddItemTable/AddItemTable";
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
      <AddItemTable></AddItemTable>
    </div>
  );
};

export default ItemManage;
