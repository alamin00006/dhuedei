import React from "react";
import useOrders from "../../hooks/useOrders";
import Loading from "../../views/Loading/Loading";
import OrderTable from "./OrderTable";

const OrderManage = () => {
  const [orders,refetch] = useOrders();
  // console.log(orders);
  return (
    <div>
      <h1 className="text-rose-500 mb-5 font-bold text-center">OUR ORDERS</h1>
      <div>
        {orders ? (
          <OrderTable orders={orders} refetch={refetch}></OrderTable>
        ) : (
          <Loading></Loading>
        )}
      </div>
    </div>
  );
};

export default OrderManage;
