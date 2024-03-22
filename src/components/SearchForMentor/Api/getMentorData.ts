import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchMentorData = async () => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.mentor}/active`
    );
    
    return response.data;
  } catch (error) {
    console.error("Error fetching mentors list", error);
  }
};
