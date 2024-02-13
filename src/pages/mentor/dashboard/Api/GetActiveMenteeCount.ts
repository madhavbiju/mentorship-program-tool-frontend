import axios from "axios";
import { baseUrl } from "../../../../config/configUrl";
import axiosInstance from "../../../../config/configAxios";

export const fetchActiveMenteeCount = async (EmployeeID:String) => {
  return await axiosInstance
    .get(`${baseUrl.mentee}/mentees-count-under-mentor/${EmployeeID}`)
    .then((data) => data.data)
    .catch((err) => console.error("Error fetching active count:", err));
};
