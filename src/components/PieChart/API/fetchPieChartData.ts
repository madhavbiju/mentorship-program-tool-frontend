import axios from "axios";
import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const fetchPieChartData = async () => {
  try {
    const response = await axiosInstance.get(`${baseUrl.admin}/active-count`);
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
