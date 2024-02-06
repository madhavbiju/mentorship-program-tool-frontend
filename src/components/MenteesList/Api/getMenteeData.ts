import axios from "axios";

export const fetchMenteeData = async (pageApi: number) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/mentee/mentor/2?pageNumber=${pageApi}&pageSize=2`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
