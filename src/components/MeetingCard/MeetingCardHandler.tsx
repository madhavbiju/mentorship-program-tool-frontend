import React, { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import { getMeetingData } from "./Api/getMeetingData";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import { Meeting } from "./Types";
import { Stack } from "@mui/system";
import { Typography } from "@mui/joy";

const MeetingCardHandler = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Set initial loading state to true
  const [meetingData, setMeetingData] = useState<{
    meeting: Meeting[];
  }>({
    meeting: [],
  });

  const fetchMeetingData = async () => {
    try {
      // Get employee id from session storage
      const EmployeeId = sessionStorage.getItem("EmployeeId");

      if (EmployeeId) {
        const response = await getMeetingData(EmployeeId);
        setMeetingData({ meeting: response }); // Update meetingData with fetched data
      } else {
        throw new Error("employee id not found in session storage");
      }
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
      <Stack>
        <Typography
          level="h3"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          Upcoming Meetings
        </Typography>
      </Stack>
      <Stack sx={{ mt: 1 }}>
        {isLoading ? ( // Render skeleton if loading
          <MentorDashboardSkeleton />
        ) : (
          <MeetingCard meeting={meetingData.meeting} />
        )}
      </Stack>
    </>
  );
};

export default MeetingCardHandler;
