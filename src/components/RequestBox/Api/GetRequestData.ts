import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchRequestData = async (pageApi: number) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.request}/allPendingRequests?status=4&pageNumber=${pageApi}&pageSize=10`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
