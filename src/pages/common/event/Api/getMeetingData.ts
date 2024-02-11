import axios from "axios";

 export const fetchMeetingData = async (meetingID: number) => {
    try {
      const response = await axios.get(
        `https://localhost:7259/api/meeting/${meetingID}`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };