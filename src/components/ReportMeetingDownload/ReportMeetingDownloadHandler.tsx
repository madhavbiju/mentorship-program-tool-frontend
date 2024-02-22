import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import PaginationIcons from "../Pagination/PaginationIcons";
import ReportMeetingDownload from "./ReportMeetingDownload";
import ReportMeetingDownloadSkeleton from "./ReportMeetingDownloadSkeleton";
import { getMeetingDownloadData } from "./API/getMeetingDownloadData";
import { Sort, meetings } from "./Types/Index";

const ReportMeetingDownloadHandler = ({ sort }: Sort) => {
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

    let response = await getMeetingDownloadData(pageApi, sort);
    setmeetingData(response);

    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getmeetingData();
  }, [pageApi, sort]);
  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <ReportMeetingDownloadSkeleton />
      ) : (
        <>
          {meetingData.meetings.length === 0 ? ( // Check if no meetings
            <Typography>No Meetings to display</Typography>
          ) : (
            <ReportMeetingDownload
              meetings={meetingData.meetings}
              totalCount={pageApi}
            />
          )}
        </>
      )}
    </>
  );
};

export default ReportMeetingDownloadHandler;
