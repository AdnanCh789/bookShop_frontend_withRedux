import http from "../../services/httpService";
import { API } from "../../config";

export const getCategories = async () => {
  try {
    return await http.get(`${API}/category/all`);
  } catch (error) {
    console.log(error);
  }
};
