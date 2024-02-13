import React, { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import { getMeetingData } from "./Api/getMeetingData";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import { Meeting } from "./Types";

const MeetingCardHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Set initial loading state to true
  const [meetingData, setMeetingData] = useState<{
    meeting: Meeting[];
  }>({
    meeting: [],
  });

  const fetchMeetingData = async () => {
    try {
      const response = await getMeetingData();
      setMeetingData({ meeting: response }); // Update meetingData with fetched data
    } catch (error) {
      console.error("Error fetching meeting data:", error);
    } finally {
      setIsLoading(false); // Set loading state to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchMeetingData();
  }, []);

  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <MeetingCard meeting={meetingData.meeting} />
      )}
    </>
  );
};

export default MeetingCardHandler;
