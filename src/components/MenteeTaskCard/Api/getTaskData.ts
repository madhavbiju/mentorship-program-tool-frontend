import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchTaskData = async (
  EmployeeID: string,
  pageApi: number,
  selectedSortOption: string,
  selectedFilterOption: string
) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.task}/Mentee/${EmployeeID},${selectedFilterOption}?page=${pageApi}&sortBy=${selectedSortOption}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching task list", error);
  }
};
