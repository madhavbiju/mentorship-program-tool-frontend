import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchMenteeData = async () => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.mentee}/active-unpaired`
    );
    
    return response.data;
  } catch (error) {
    console.error("Error fetching mentees list", error);
  }
};
