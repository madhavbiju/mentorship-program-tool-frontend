import axios from "axios";
import { baseUrl } from "../../../../config/configUrl";
import axiosInstance from "../../../../config/configAxios";

 export const fetchMeetingData = async (meetingID: number) => {
    try {
      const response = await axiosInstance.get(
        `${baseUrl.meeting}/Meetings${meetingID}`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };