import axios from "axios";

 export const fetchProgramData = async (pageApi: number) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/users?skip=${pageApi}&limit=5`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };