import React, { useEffect, useState } from "react";
import MenteeDashboard from "../../mentee/dashboard/MenteeDashboard";
import { ActiveMenteeCountData } from "./Types";
import { fetchActiveMenteeCount } from "./Api/GetActiveMenteeCount";
import MentorDashboard from "./MentorDashboard";
import MentorDashboardSkeleton from "./MentorDashboardSkeleton";

const MentorDashboradHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeCount, setActiveCount] = useState<ActiveMenteeCountData>({
    menteeCount: 0,
  });
  const EmployeeID = sessionStorage.getItem("EmployeeId");
  const ActiveMenteeCount = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchActiveMenteeCount(EmployeeID!);
    setActiveCount(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    ActiveMenteeCount();
  }, []);

  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <MentorDashboard menteeCount={activeCount.menteeCount} />
      )}
    </>
  );
};

export default MentorDashboradHandler;
