import axios from "axios";

 export const fetchRequestData = async (pageApi: number) => {
    try {
      const response = await axios.get(
        `https://localhost:7259/all?status=4&pageNumber=${pageApi}&pageSize=3`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };