import axios from "axios";
import { taskType } from "../Types";
import { baseUrl } from "../../../../config/configUrl";
import axiosInstance from "../../../../config/configAxios";

export const posttaskData = async (taskData: taskType) => {
  try {
    const response = await axiosInstance.post(
      `${baseUrl.task}/create`,
      taskData
    );
    return response;
  } catch (error) {
    console.error("Error posting task:", error);
  }
};
