import axios from "axios";

export const fetchtaskData = async (programId: number) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/task/Program/${programId},0?page=0`
    );
    console.log("Admin Pair Tasks");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
