import axios from "axios";

 export const fetchRequestData = async (pageApi: number) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/users?skip=${pageApi}&limit=4`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };