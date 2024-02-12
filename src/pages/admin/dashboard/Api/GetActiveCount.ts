import axios from "axios";
import { ActiveCountData } from "../Types";
import axiosInstance from "../../../../config/configAxios";
import { baseUrl } from "../../../../config/configUrl";

export const fetchActiveCount = async () => {
  return await axiosInstance
    .get(`${baseUrl.admin}/active-count`)
    .then((data) => data.data)
    .catch((err) => console.error("Error fetching active count:", err));
};
