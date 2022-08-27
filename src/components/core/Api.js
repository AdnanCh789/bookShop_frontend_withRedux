import http from "../../services/httpService";
import { API } from "../../config";

export const getProducts = async (sortBy) => {
  try {
    return await http.get(`${API}/product/?sortBy=${sortBy}&order=asc&limit=3`);
  } catch (error) {
    console.log(error);
  }
};
