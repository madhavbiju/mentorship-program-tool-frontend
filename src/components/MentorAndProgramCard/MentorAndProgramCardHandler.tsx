import React, { useEffect, useState } from "react";
import MentorAndProgramCard from "./MentorAndProgramCard";
import { fetchMenteeData } from "./Api/getMenteeData";
import { Mentee } from "./Types";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";

const MentorAndProgramCardHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [menteeData, setMenteeData] = useState<Mentee>({
    mentorFirstName: "",
    programName: "",
    startDate: "",
    endDate: "",
  });

  const getMenteeData = async () => {
    try {
      setIsLoading(true); // Set loading state to true while fetching data

      // Get employee id from session storage
      const EmployeeId = sessionStorage.getItem("EmployeeId");

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
        <MentorDashboardSkeleton />
      ) : (
        <MentorAndProgramCard
            mentorFirstName={menteeData.mentorFirstName}
            programName={menteeData.programName} startDate={""} endDate={""}        />
      )}
    </>
  );
};

export default MentorAndProgramCardHandler;
