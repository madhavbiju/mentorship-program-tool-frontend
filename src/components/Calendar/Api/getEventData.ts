import axios from "axios";

 export const fetchEventData = async (employeeID: number, roleID:number) => {
    try {
      const response = await axios.get(
        `https://localhost:7259/api/meeting/employee/${employeeID}?role=${roleID}`
      );
      return(response.data);
    } catch (error) {
      console.error("Error fetching active count:", error);
    }
  };