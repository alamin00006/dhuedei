import { useQuery } from "react-query";

const useOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery([], () =>
    fetch("https://dhuenin-server-side.onrender.com/api/v1/order", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [orders, refetch, isLoading];
};

export default useOrders;
