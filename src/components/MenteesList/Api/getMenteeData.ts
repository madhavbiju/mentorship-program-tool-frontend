import { common } from "@mui/material/colors";
import axios from "axios";
import { baseUrl } from "../../../config/configUrl";
import axiosInstance from "../../../config/configAxios";

export const fetchMenteeData = async (
  EmployeeID: string,
  pageApi: number,
  selectedSortOption: string,
  selectedFilterOption: string
) => {
  try {
    const response = await axiosInstance.get(
      `${baseUrl.mentee}/mentor/${EmployeeID}?pageNumber=${pageApi}&pageSize=5&sortBy=${selectedSortOption}&filterBy=${selectedFilterOption}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching mentees list", error);
  }
};
