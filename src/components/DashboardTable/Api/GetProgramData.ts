
import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

 export const fetchProgramData = async (pageApi: number) => {
    try {
      const response = await axiosInstance.get(
        `${baseUrl.program}/ending-soon?pageNumber=${pageApi}&pageSize=4`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };