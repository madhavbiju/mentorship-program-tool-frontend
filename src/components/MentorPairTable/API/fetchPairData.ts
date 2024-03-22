import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchPairData = async (id: number, pageApi: number) => {
  try {
    let url = `${baseUrl.program}/mentor/${id}?pageNumber=${pageApi}&pageSize=10`;

    // Add status query parameter if status is not empty

    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
    // Return null or handle error as necessary
    return null;
  }
};
