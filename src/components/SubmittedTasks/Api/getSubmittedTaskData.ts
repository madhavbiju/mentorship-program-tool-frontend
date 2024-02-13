import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const fetchTaskData = async (pageApi: number) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.task}/Mentor/2,6?page=${pageApi}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching mentees list", error);
  }
};
