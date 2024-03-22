import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const getMentorReportMeetingsData = async (
  employeeId: number,
  pageNumber: number
) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.meeting}/meetings/employeeid/${employeeId}?page=${pageNumber}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
