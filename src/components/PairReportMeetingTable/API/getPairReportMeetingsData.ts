import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const getPairReportMeetingsData = async (
  programId: number,
  pageApi: number,
  sort: string
) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.meeting}/meetings/programid/${programId}?page=${pageApi}&sortBy=${sort}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
