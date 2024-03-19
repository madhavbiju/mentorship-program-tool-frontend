import React, { useEffect, useState } from "react";
import { fetchMenteeData } from "./Api/getMenteeData";
import { Mentee } from "./Types";
import MenteeProfile from "./MenteeProfile";
import { useParams } from "react-router-dom";

interface Params {
  menteeId: number;
  [key: string]: any;
}
const menteeProfileHandler = () => {
  const { menteeId } = useParams<Params>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menteeData, setMenteeData] = useState<Mentee>({
    programName: "",
    menteeFirstName: "",
    menteeLastName: "",
    mentorFirstName: "",
    programID: 0,
    endDate: "",
    startDate: "",
  });

  const getMenteeData = async () => {
    try {
      setIsLoading(true); // Set loading state to true while fetching data

      // Get employee id from session storage
      const EmployeeId = menteeId;

      if (EmployeeId) {
        const response = await fetchMenteeData(EmployeeId);
        setMenteeData(response);
      } else {
        throw new Error("Employee id not found in session storage");
      }
    } catch (error) {
      console.error("Error fetching mentee data:", error);
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or failure
    }
  };

  useEffect(() => {
    getMenteeData();
  }, []);

  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <></>
      ) : (
        <MenteeProfile menteeData={menteeData} />
      )}
    </>
  );
};

export default menteeProfileHandler;
