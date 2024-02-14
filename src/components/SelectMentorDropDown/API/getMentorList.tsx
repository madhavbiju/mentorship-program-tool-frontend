import axios from "axios";

export const getMentorList = async (mentorId: number) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/mentee/mentor/list/${mentorId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
