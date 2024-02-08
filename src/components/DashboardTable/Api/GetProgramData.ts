import axios from "axios";

 export const fetchProgramData = async (pageApi: number) => {
    try {
      const response = await axios.get(
        `https://localhost:7259/api/program/All?page=${pageApi}`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };