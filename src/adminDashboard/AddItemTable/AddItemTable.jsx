import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import useItems from "../../hooks/useItems";
import "./AddTable.css";

const AddItemTable = () => {
  const [items, refetch] = useItems();
  console.log(items);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-solid border-2 border-black text-black">
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
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>
              <div className="flex space-x-4">
                <div>
                  <label htmlFor="view-house-modal" className="">
                    <AiOutlineEye className="h-6 w-6 cursor-pointer" />
                  </label>
                </div>
                <div>
                  <label htmlFor="edit-modal" className="">
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
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
            <td>Purple</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddItemTable;
