import axios from "axios";

 export const fetchProgramData = async (pageApi: number) => {
    try {
      const response = await axios.get(
        `https://localhost:7259/api/program/ending-soon?pageNumber=${pageApi}&pageSize=4`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };