import axios from "axios";

export const fetchMentorData = async () => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/mentor/active`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching mentors list", error);
  }
};
