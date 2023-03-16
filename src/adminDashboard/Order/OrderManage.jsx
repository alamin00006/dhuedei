import React from "react";
import useOrders from "../../hooks/useOrders";
import OrderTable from "./OrderTable";

const OrderManage = () => {
  const [orders] = useOrders();
  console.log(orders);
  return (
    <div>
      <h1>Our Orders</h1>
      <div>
        <OrderTable></OrderTable>
      </div>
    </div>
  );
};

export default OrderManage;
