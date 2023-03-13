import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaLaptopHouse, FaUsersCog } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
// import "./Dashboard.css";
// import { useQuery } from "react-query";
// import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  //   const [user, setUser] = useState({});
  //   const token = localStorage.getItem("token");

  //   const { isLoading, refetch } = useQuery([token], () => {
  //     async function getUser() {
  //       if (!token) {
  //         return navigate("/");
  //       } else {
  //         await axios
  //           .get(
  //             "https://all-assistant-server.onrender.com/api/v1/user/me",
  //             {
  //               headers: {
  //                 Authorization: `Bearer ${token}`,
  //               },
  //             },
  //             {
  //               refetchInterval: 6000,
  //             }
  //           )
  //           .then((data) => {
  //             setUser(data?.data?.data);
  //             refetch();
  //           })
  //           .catch((err) => {
  //             localStorage.removeItem("token");
  //             navigate("/login");
  //           });
  //       }
  //     }
  //     getUser();
  //   });

  //   const SingOutHandle = () => {
  //     navigate("/");
  //     localStorage.removeItem("token");
  //     window.location.reload(false);
  //   };

  //   if (isLoading) {
  //     return <Loading></Loading>;
  //   }
  return (
    <div className="lg:mx-44">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content border  border-indigo-200 p-6">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side w-48">
          <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
          <ul className="menu p-2 w-80 space-y-2 ">
            <li className="Drawer-bg border-none  h-10">
              <Link to="/dashboard" className="text-black">
                <AiOutlineAppstoreAdd className="h-6 w-6 text-black" /> Item
                Manage
              </Link>
            </li>

            <li className="Drawer-bg hover:bg-slate-300 h-10">
              <Link to="" className="text-black">
                <RiLogoutBoxRFill className="h-6 w-6 text-black" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
