import axios from "axios";

export const fetchPieChartData = async () => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/admin/active-count`
    );
    console.log("Api response of Pie Chart");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching active count:", error);
  }
};
