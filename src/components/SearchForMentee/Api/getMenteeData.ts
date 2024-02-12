import axios from "axios";

export const fetchMenteeData = async () => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/mentee/active-unpaired`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching mentees list", error);
  }
};