import axios from "axios";

export const getPairReportMeetingsData = async (
  programId: number,
  pageApi: number,
  sort: string
) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/meeting/meetings/programid/${programId}?page=${pageApi}&sortBy=${sort}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
