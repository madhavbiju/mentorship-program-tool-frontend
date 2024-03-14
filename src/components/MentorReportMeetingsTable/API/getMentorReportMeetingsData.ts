import axios from "axios";

export const getMentorReportMeetingsData = async (
  employeeId: number,
  pageNumber: number
) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/meeting/meetings/employeeid/${employeeId}?page=${pageNumber}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
