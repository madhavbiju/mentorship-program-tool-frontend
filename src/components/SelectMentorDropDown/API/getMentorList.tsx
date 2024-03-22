import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const getMentorList = async (mentorId: number) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.mentee}/mentor/list/${mentorId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
