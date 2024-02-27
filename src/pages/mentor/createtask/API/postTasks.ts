import axios from "axios";
import { taskType } from "../Types";

export const posttaskData = async (taskData: taskType) => {
  try {
    const response = await axios.post(
      "https://localhost:7259/api/task/create",
      taskData
    );
    return response;
  } catch (error) {
    console.error("Error posting task:", error);
  }
};
