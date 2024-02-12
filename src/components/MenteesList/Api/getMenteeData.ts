import { common } from "@mui/material/colors";
import axios from "axios";

export const fetchMenteeData = async (
  pageApi: number,
  selectedSortOption: string,
  selectedFilterOption: string
) => {
  try {
    const response = await axios.get(
      
      // `https://localhost:7259/api/mentee/mentor/2?pageNumber=${pageApi}&pageSize=5`
      `https://localhost:7259/api/mentee/mentor/2?pageNumber=${pageApi}&pageSize=5&sortBy=${selectedSortOption}&filterBy=${selectedFilterOption}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching mentees list", error);
  }
};
