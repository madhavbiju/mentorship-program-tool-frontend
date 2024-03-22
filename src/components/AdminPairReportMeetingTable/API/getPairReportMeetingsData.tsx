import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const getPairReportMeetingsData = async (
  programId: number,
  pageApi: number
) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.meeting}/meetings/programid/${programId}?page=${pageApi}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
