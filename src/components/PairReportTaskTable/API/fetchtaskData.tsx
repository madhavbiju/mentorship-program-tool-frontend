import axios from "axios";

export const fetchtaskData = async (
  programId: number,
  pageApi: number,
  sort: string
) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/task/Program/${programId},0?page=${pageApi}&sortBy=${sort}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
