import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const fetchMenteeData = async () => {
  try {
    const response = await axiosInstance.get(`${baseUrl.mentee}/details/3`);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching mentee details", error);
  }
};
