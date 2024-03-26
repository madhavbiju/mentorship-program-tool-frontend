import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchMenteeList = async (EmployeeID: string) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.mentee}/mentor/list/${EmployeeID}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
