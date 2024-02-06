import axios from "axios";

 export const fetchPairData = async (pageApi: number) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/users?skip=${pageApi}&limit=6`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };