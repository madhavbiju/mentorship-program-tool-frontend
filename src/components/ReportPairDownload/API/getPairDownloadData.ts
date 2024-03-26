import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const getPairDownloadData = async (
  pageApi: number,
  status: string,
  sort: string,
  search: string
) => {
  try {
    let url =
      "${baseUrl.program}/All?page=0&programStatus=1&sortOrder=programName";

    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
    // Return null or handle error as necessary
    return null;
  }
};
