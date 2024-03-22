import axios from "axios";
import { meetingType } from "../Types";
import { baseUrl } from "../../../../config/configUrl";
import axiosInstance from "../../../../config/configAxios";

 export const postMeetingData = async (meetingData: meetingType) => {
    try {
        const response = await axiosInstance.post(`${baseUrl.meeting}`, (meetingData
        ));
      return(response);
    } catch (error) {
      console.error("Error posting meeting:", error);
    }
  };

  export const fetchProgramEndDate = async(programID : number)=>{
    try {
      const response = await axiosInstance.get(
        `${baseUrl.program}/${programID}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching endDate", error);
    }
  }