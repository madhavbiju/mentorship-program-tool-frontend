import axiosInstance from "../../../../config/configAxios";
import { baseUrl } from "../../../../config/configUrl";

export const fetchMenteeData = async (EmployeeId: number) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.mentee}/details/${EmployeeId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching mentee details", error);
  }
};
