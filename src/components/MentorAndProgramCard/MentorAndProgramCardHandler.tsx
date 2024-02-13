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
  });

  const getMenteeData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchMenteeData();
    setMenteeData(response);
    setIsLoading(false); // Set loading state to false after fetching data
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
          programName={menteeData.programName}
        />
      )}
    </>
  );
};

export default MentorAndProgramCardHandler;
