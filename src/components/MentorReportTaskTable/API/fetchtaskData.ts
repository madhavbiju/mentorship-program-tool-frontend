import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchtaskData = async (employeeId: number, pageApi: number) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.task}/Mentor/${employeeId},0?page=${pageApi}`
    );
    console.log("Admin Pair Tasks");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
