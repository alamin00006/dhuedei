import React from "react";
import useItems from "../hooks/useItems";
import Loading from "../views/Loading/Loading";
import AddItemTable from "./AddItemTable/AddItemTable";
import ItemAddModal from "./ItemAddModal";

const ItemManage = () => {
  const [items, refetch] = useItems();
  
  return (
    <div>
      <h1 className="mb-6">
        <label
          htmlFor="my-modal-6"
          className="bg-rose-500 px-5 py-3 rounded-lg cursor-pointer font-bold text-white"
        >
          ITEM ADD
        </label>
      </h1>
      <ItemAddModal refetch={refetch} />
      {items ? (
        <AddItemTable items={items} refetch={refetch}></AddItemTable>
      ) : (
        <Loading></Loading>
      )}
    </div>
  );
};

export default ItemManage;
