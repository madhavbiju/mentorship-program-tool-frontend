import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const fetchStartEndData = async () => {
  try {
    const response = await axiosInstance.get(`${baseUrl.program}/3`);
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching dates", error);
  }
};
