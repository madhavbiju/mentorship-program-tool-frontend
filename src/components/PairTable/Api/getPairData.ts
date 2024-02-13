import axios from "axios";

export const fetchPairData = async (pageApi: number, status: string, sort: string, search: string) => {
  try {
    let url = `https://localhost:7259/api/program/All?page=${pageApi}`;

    // Add status query parameter if status is not empty
    if (status !== "") {
      url += `&programStatus=${status}`;
    }

    // Add sort query parameter if sort is not empty
    if (sort !== "") {
      url += `&sortOrder=${sort}`;
    }

    // Add search query parameter if search is not empty
    if (search !== "") {
      url += `&search=${encodeURIComponent(search)}`;
    }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
    // Return null or handle error as necessary
    return null;
  }
};
