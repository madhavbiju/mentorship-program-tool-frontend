import axios from "axios";
import axiosInstance from "../../../../config/configAxios";
import { baseUrl } from "../../../../config/configUrl";

export const fetchtaskData = async (pageApi: number, sort: string) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.task}/Mentor/0,0?page=${pageApi}&sortBy=${sort}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
