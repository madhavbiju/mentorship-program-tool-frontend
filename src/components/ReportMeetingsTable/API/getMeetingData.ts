import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const getMeetingData = async (pageApi: number, sort: string) => {
  try {
    
    
    const response = await axiosInstance.get(
      `${baseUrl.meeting}/${pageApi}?sortBy=${sort}`
    );
     
     

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
