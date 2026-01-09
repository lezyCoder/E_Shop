import axios from "axios";

export const fetchProducts = async (query = "") => {
  const options = {
    method: "GET",
    url: "https://api.freeapi.app/api/v1/public/randomproducts",
    params: {
      page: 1,
      limit: 20,
      query,
    },
    headers: {
      accept: "application/json",
    },
  };

  const response = await axios.request(options);
  return response.data;
};
