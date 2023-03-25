import { useQuery } from "react-query";

const useItems = () => {
  const {
    data: itmes,
    isLoading,
    refetch,
  } = useQuery([], () =>
    fetch("https://dhuenin-server-side.onrender.com/api/v1/item", {
      method: "GET",
    }).then((res) => res.json())
  );

  return [itmes, refetch, isLoading];
};

export default useItems;
