import axios from "axios";

export const fetchProducts = async (page, limit = 20) => {
  const res = await axios.get(`http://localhost:5000/api/products?page=${page}&limit=${limit}`);
  return res.data;
};
