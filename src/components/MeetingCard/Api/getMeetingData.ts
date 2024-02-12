import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const getMeetingData = async () => {
  try {
    const response = await axiosInstance.get(`${baseUrl.meeting}/employee/2?role=2`);
    return response.data;
  } catch (error) {
    console.error("Error fetching mentees list", error);
  }
};
