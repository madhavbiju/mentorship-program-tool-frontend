import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";
export const getMenteeList = async () => {
  try {
    const response = await axiosInstance.get(`${baseUrl.mentee}/all/list`);
    console.log(" Mentee Data");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching mentee List", error);
  }
};
