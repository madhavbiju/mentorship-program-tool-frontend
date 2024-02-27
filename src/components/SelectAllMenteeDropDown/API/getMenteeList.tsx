import axios from "axios";
export const getMenteeList = async () => {
  try {
    const response = await axios.get(
      `https://localhost:7259/api/mentee/all/list`
    );
    console.log(" Mentee Data");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching mentee List", error);
  }
};
