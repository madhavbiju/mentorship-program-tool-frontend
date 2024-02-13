import React, { useEffect, useState } from "react";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import ProgramProgressBar from "./ProgramProgressBar";
import { StartEndDate } from "./Types";
import { fetchStartEndData } from "./Api/getStartEndDate";

const ProgramProgressBarHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dateData, setDateData] = useState<StartEndDate>({
    programID: 0,
    mentorID: 0,
    menteeID: 0,
    startDate: "",
    endDate: "",
  });

  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [percentageCompletion, setPercentageCompletion] = useState<number>(0);
  const getDateData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchStartEndData();
    setDateData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getDateData();
  }, []);

  useEffect(() => {
    if (dateData.endDate) {
      const currentDate = new Date();
      const startDate = new Date(dateData.startDate);
      const endDate = new Date(dateData.endDate);
      console.log("currentDate:", currentDate);
      console.log("endDate:", endDate);
      const differenceInTime = endDate.getTime() - currentDate.getTime();
      console.log("differenceInTime:", differenceInTime);
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      console.log("differenceInDays:", differenceInDays);
      setDaysLeft(differenceInDays); //to find how many days left using currentDate and EndDate

      const totalDuration = endDate.getTime() - startDate.getTime();
      const elapsedDuration = currentDate.getTime() - startDate.getTime();
      const percentage = (elapsedDuration / totalDuration) * 100;
      setPercentageCompletion(percentage); //to find percetage of completion using start and end date
    }
  }, [dateData.startDate,dateData.endDate]);

  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <ProgramProgressBar daysLeft={daysLeft} percentageCompletion={percentageCompletion} />
      )}
    </>
  );
};

export default ProgramProgressBarHandler;
