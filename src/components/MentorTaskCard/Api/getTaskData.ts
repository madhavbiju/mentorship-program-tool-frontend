import axios from "axios";

export const fetchTaskData = async (pageApi: number) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/task/Mentor/2,1?page=${pageApi}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching task list", error);
  }
};
