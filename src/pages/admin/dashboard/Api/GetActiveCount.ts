import axios from "axios";
import { ActiveCountData } from "../Types";

export const fetchActiveCount = async () => {
  return await axios
    .get(`https://localhost:7259/api/admin/active-count`)
    .then((data) => data.data)
    .catch((err) => console.error("Error fetching active count:", err));
};
