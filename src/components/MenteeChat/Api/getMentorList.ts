import axios from "axios";
import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

 export const fetchMentorList = async (EmployeeID: string) => {
    try {
      const response = await axiosInstance.get(
        `${baseUrl.mentee}/mentees/list/${EmployeeID}`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };