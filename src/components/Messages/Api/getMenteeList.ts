import axios from "axios";
import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

 export const fetchMenteeList = async (mentorId: number) => {
    try {
      const response = await axiosInstance.get(
        `${baseUrl.mentee}/mentor/list/${mentorId}`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };