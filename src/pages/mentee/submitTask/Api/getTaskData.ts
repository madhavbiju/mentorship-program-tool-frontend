import axios from "axios";
import { baseUrl } from "../../../../config/configUrl";
import axiosInstance from "../../../../config/configAxios";

export const fetchTaskData = async (taskID: number) => {
  try {
    const response = await axiosInstance.get(`${baseUrl.task}/tasks/${taskID}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching task data:", error);
  }
};
