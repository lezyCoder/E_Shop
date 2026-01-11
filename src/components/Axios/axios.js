import axios from "axios";

export const fetchProducts = async () => {
  const options = {
    method: "GET",
    url: "https://dummyjson.com/products",
    headers: {
      accept: "application/json",
    },
  };

  const response = await axios.request(options);
  return response.data;
};
