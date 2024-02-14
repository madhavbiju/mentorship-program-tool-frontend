import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const fetchPendingTaskData = async (pageApi: number,EmployeeID: string) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.task}/Mentee/${EmployeeID},1?page=${pageApi}`
    );
    
    return response.data;
  } catch (error) {
    console.error("Error fetching pendingtask list", error);
  }
};
