import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchTaskData = async (
  pageApi: number,
  selectedSortOption: string,
  selectedFilterOption: string
) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.task}/Mentee/2,${selectedFilterOption}?page=${pageApi}&sortBy=${selectedSortOption}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching task list", error);
  }
};
