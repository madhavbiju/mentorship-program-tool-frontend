import axios from "axios";

export const GetMenteeNames = async (pageApi: number) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/mentee/mentor/2?pageNumber=${pageApi}&pageSize=5`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching mentee names :", error);
  }
};
