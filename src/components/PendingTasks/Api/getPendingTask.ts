import axiosInstance from "../../../config/configAxios";
import { baseUrl } from "../../../config/configUrl";

export const fetchPendingTaskData = async (pageApi: number,EmployeeID: string) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.task}/Program/${EmployeeID},1?page=${pageApi}`
    );
    console.log("response.data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching pendingtask list", error);
  }
};
