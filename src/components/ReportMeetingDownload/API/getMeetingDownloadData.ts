import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const getMeetingDownloadData = async (pageApi: number, sort: string) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.meeting}/0?sortBy=${sort}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
