import axios from "axios";

export const fetchTaskData = async (
  pageApi: number,
  selectedSortOption: string,
  selectedFilterOption: string
) => {
  try {
    const response = await axios.get(
      // `https://localhost:7259/api/task/Mentor/2,0?page=${pageApi}`a
      ` https://localhost:7259/api/task/Program/3,1?page=1`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching task list", error);
  }
};