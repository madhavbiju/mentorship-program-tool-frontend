import axios from "axios";

export const fetchProgramData = async (programId: number) => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/program/pair-details?id=${programId}`
    );
    console.log("response");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching task list", error);
  }
};