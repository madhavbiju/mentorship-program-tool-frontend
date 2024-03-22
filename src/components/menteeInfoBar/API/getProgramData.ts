import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchProgramData = async (programId: number) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.program}/pair-details?id=${programId}`
    );
    
    

    return response.data;
  } catch (error) {
    console.error("Error fetching task list", error);
  }
};
