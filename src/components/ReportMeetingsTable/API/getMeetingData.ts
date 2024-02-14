import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const getMeetingData = async (pageApi: number, sort: string) => {
  try {
    console.log("sort inside api");
    console.log(sort);
    const response = await axiosInstance.get(
      `${baseUrl.meeting}/${pageApi}?sortBy=${sort}`
    );
    // console.log("GetMeeting");
    // console.log(response.data.meetings);

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
