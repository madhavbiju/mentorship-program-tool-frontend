import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import { Sort, meetings } from "./Types/Index";
import { getMeetingData } from "./API/GetMeetingData";
import PaginationIcons from "../Pagination/PaginationIcons";
import ReportMeeting from "./ReportMeeting";
import ReportMeetingSkeleton from "./ReportMeetingSkeleton";

const ReportMeetingHandler = ({ sort }: Sort) => {
  const [meetingData, setmeetingData] = useState<{
    meetings: meetings[];
    totalCount: number;
  }>({
    meetings: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getmeetingData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    console.log("sort in handler");
    console.log(sort);
    let response = await getMeetingData(pageApi, sort);
    setmeetingData(response);
    console.log(response);

    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getmeetingData();
  }, [pageApi, sort]);
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <PaginationIcons
          total={meetingData.totalCount}
          perPage={5}
          setPageApi={setPageApi}
        />
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <ReportMeetingSkeleton />
      ) : (
        <ReportMeeting meetings={meetingData.meetings} totalCount={pageApi} />
      )}
    </>
  );
};

export default ReportMeetingHandler;
