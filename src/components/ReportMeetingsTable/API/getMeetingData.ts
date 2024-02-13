import axios from "axios";

export const getMeetingData = async (pageApi: number, sort: string) => {
  try {
    console.log("sort inside api");
    console.log(sort);
    const response = await axios.get(
      `https://localhost:7259/api/meeting/${pageApi}?sortBy=${sort}`
    );
    // console.log("GetMeeting");
    // console.log(response.data.meetings);

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
