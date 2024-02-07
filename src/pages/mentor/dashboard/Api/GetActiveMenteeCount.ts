import axios from "axios";

export const fetchActiveMenteeCount = async () => {
  return await axios
    .get(`https://localhost:7259/api/mentee/mentees-count-under-mentor/2`)
    .then((data) => data.data)
    .catch((err) => console.error("Error fetching active count:", err));
};
