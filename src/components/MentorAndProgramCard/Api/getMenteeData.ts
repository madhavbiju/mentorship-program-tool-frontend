import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const fetchMenteeData = async (EmployeeId: string) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.mentee}/details/${EmployeeId}`
    );
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching mentee details", error);
  }
};
