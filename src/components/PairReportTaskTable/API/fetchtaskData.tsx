import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchtaskData = async (
  programId: number,
  pageApi: number,
  sort: string
) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.task}/Program/${programId},0?page=${pageApi}&sortBy=${sort}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
