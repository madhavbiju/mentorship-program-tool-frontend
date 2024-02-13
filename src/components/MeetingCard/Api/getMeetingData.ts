import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const getMeetingData = async (EmployeeId: string) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.meeting}/employee/upcoming/meetings/${EmployeeId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching mentees list", error);
  }
};
