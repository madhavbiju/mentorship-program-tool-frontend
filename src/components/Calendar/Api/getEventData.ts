import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

 export const fetchEventData = async (EmployeeID: string, roleID:number) => {
    try {
      const response = await axiosInstance.get(
        `${baseUrl.meeting}/employee/${EmployeeID}?role=${roleID}`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };