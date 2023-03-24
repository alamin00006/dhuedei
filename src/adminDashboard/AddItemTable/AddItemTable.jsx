import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import useItems from "../../hooks/useItems";
import "./AddTable.css";
import ItemEditModal from "./ItemEditModal/ItemEditModal";

const AddItemTable = () => {
  const [items, refetch] = useItems();
  const [editItem, setEditItem] = useState({});
  const [detailsItem, setDetailsItem] = useState({});
  const [deleteItem, setDeleteItem] = useState({});
  const addItems = items?.data;
  console.log(addItems);
  return (
    <div className="overflow-x-auto ">
      <table className="table w-full border-solid border-2 border-black text-black scroll-mt-px">
        {/* head */}
        <thead>
          <tr className="text-white">
            <th></th>
            <th>ITEM NAME</th>
            <th>IRON</th>
            <th>WASH</th>
            <th>DRY CLEAN</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {addItems.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{item?.itemName}</td>
              <td>{item?.ironPerPrice}</td>
              <td>{item?.washPerPrice}</td>
              <td>{item?.dryCleanPerPrice}</td>
              <td>
                <div className="flex space-x-4">
                  <div onClick={()=>setDetailsItem(item)}>
                    <label htmlFor="view-item-modal" className="">
                      <AiOutlineEye className="h-6 w-6 cursor-pointer" />
                    </label>
                  </div>
                  <div onClick={()=>setEditItem(item)}>
                    <label htmlFor="my-modal-6" className="">
                      <FiEdit className="h-6 w-6 cursor-pointer" />
                    </label>
                  </div>

                  <div>
                    <label htmlFor="deletemodal" className="">
                      <RiDeleteBin6Line className="h-6 w-6 cursor-pointer" />
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          ))}
           <ItemEditModal refetch={refetch} editHotel={editItem} />
             
        </tbody>
      </table>
    </div>
  );
};

export default AddItemTable;
