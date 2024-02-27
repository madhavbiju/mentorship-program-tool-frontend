import React, { useEffect, useState } from "react";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import ProgramProgressBar from "./ProgramProgressBar";
import { fetchMenteeData } from "../MentorAndProgramCard/Api/getMenteeData";
import { Mentee } from "../MentorAndProgramCard/Types";

const ProgramProgressBarHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dateData, setDateData] = useState<Mentee>({
    mentorFirstName: "",
    programName: "",
    startDate: "",
    endDate: "",
  });

  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [percentageCompletion, setPercentageCompletion] = useState<number>(0);
  const getDateData = async () => {
    try {
      setIsLoading(true); // Set loading state to true while fetching data

      // Get employee id from session storage
      const EmployeeId = sessionStorage.getItem("EmployeeId");

      if (EmployeeId) {
        const response = await fetchMenteeData(EmployeeId); // Assuming there's a function named fetchDateData to fetch date data
        setDateData(response);
      } else {
        throw new Error("Employee id not found in session storage");
      }
    } catch (error) {
      console.error("Error fetching date data:", error);
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or failure
    }
  };

  useEffect(() => {
    getDateData();
  }, []);

  useEffect(() => {
    if (dateData.endDate) {
      const currentDate = new Date();
      const startDate = new Date(dateData.startDate);
      const endDate = new Date(dateData.endDate);

      const differenceInTime = endDate.getTime() - currentDate.getTime();

      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

      setDaysLeft(differenceInDays); //to find how many days left using currentDate and EndDate

      const totalDuration = endDate.getTime() - startDate.getTime();
      const elapsedDuration = currentDate.getTime() - startDate.getTime();
      const percentage = (elapsedDuration / totalDuration) * 100;
      setPercentageCompletion(percentage); //to find percetage of completion using start and end date
    }
  }, [dateData.startDate, dateData.endDate]);

  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <ProgramProgressBar
          daysLeft={daysLeft}
          percentageCompletion={percentageCompletion}
        />
      )}
    </>
  );
};

export default ProgramProgressBarHandler;
