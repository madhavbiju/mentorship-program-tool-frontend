import axios from "axios";

export const fetchtaskData = async (pageApi: number) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/task/Mentor/0,0?page=${pageApi}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
