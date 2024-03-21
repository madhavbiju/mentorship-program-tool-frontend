import React, { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import { getMeetingData } from "./Api/getMeetingData";
import MentorDashboardSkeleton from "../../pages/mentor/dashboard/MentorDashboardSkeleton";
import { Meeting } from "./Types";
import { Stack } from "@mui/system";
import { Grid, Sheet, Typography } from "@mui/joy";

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
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
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
      {isLoading ? ( // Render skeleton if loading
        <MentorDashboardSkeleton />
      ) : (
        <>
          <Sheet
            variant="outlined"
            sx={{
              mt: 1,
              flex: 1,
              borderRadius: "sm",
              height: "100%",
              padding: 1,
            }}
          >
            {meetingData.meeting.length === 0 ? (
              <Stack
                justifyContent="center"
                alignItems="center"
                spacing={1}
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <img
                  height={300}
                  src="/Assets/time.png" // Specify your default image path
                  srcSet="/Assets/time.png"
                  loading="lazy"
                  alt=""
                />
                <Typography>No Upcoming Meetings</Typography>
              </Stack>
            ) : (
              <MeetingCard meeting={meetingData.meeting} />
            )}
          </Sheet>
        </>
      )}
    </>
  );
};

export default MeetingCardHandler;
