import axios from "axios";

export const fetchtaskData = async (employeeId: number, pageApi: number) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/task/Mentor/${employeeId},0?page=${pageApi}`
    );
    console.log("Admin Pair Tasks");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
