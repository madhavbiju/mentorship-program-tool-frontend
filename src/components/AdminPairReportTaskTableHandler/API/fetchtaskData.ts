import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const fetchtaskData = async (programId: number) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.task}/Program/${programId},0?page=0`
    );
    console.log("Admin Pair Tasks");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
