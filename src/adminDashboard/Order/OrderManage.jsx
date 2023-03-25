import React from "react";
import useOrders from "../../hooks/useOrders";
import Loading from "../../views/Loading/Loading";
import OrderTable from "./OrderTable";

const OrderManage = () => {
  const [orders] = useOrders();
  // console.log(orders);
  return (
    <div>
      <h1>Our Orders</h1>
      <div>
        {orders ? (
          <OrderTable orders={orders}></OrderTable>
        ) : (
          <Loading></Loading>
        )}
      </div>
    </div>
  );
};

export default OrderManage;
