import axios from "axios";

export const fetchMenteeList = async (EmployeeID: string) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/mentee/mentor/list/${EmployeeID}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
