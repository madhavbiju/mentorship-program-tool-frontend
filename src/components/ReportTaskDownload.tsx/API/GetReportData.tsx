import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchtaskData = async (pageApi: number, sort: string) => {
  try {
    const response = await axiosInstance.get(`${baseUrl.task}/Mentor/0,0`);
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
