import axiosInstance from "../../../../config/configAxios";
import { baseUrl } from "../../../../config/configUrl";

export const fetchtaskData = async (programId: number) => {
  try {
    const response = await axiosInstance.get(
        `${baseUrl.task}/Program/${programId},0?page=1`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching Tasks:", error);
  }
};
