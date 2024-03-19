import axios from "axios";
import { meetingType } from "../Types";

 export const postMeetingData = async (meetingData: meetingType) => {
    try {
        const response = await axios.post('https://localhost:7259/api/meeting', (meetingData
        ));
      return(response);
    } catch (error) {
      console.error("Error posting meeting:", error);
    }
  };

  export const fetchProgramEndDate = async(programID : number)=>{
    try {
      const response = await axios.get(
        `https://localhost:7259/api/program/${programID}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching endDate", error);
    }
  }