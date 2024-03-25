import React, { useState, useEffect } from "react";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import { getPairReportMeetingsData } from "./API/getPairReportMeetingsData";
import { meetings } from "./Types/index";
import AdminPairReportMeetingTable from "./AdminPairReportMeetingTable";
import AdminPairReportMeetingTableSkeleton from "./AdminPairReportMeetingTableSkeleton";

const PairReportMeetingTableHandler = ({
  programid,
}: {
  sort: string;
  programid: number;
}) => {
  const [meetingData, setmeetingData] = useState<{
    meetings: meetings[];
    totalCount: number;
  }>({
    meetings: [],
    totalCount: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getmeetingData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await getPairReportMeetingsData(programid, 0);
    setmeetingData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getmeetingData();
  }, [programid]);

  return (
    <>
      {isLoading ? ( // Render skeleton if loading
        <AdminPairReportMeetingTableSkeleton />
      ) : (
        <>
          {meetingData.meetings.length === 0 ? ( // Check if no meetings
            <Typography>No Meetings to display</Typography>
          ) : (
            <AdminPairReportMeetingTable
              meetings={meetingData.meetings}
              totalCount={0}
            />
          )}
        </>
      )}
    </>
  );
};

export default PairReportMeetingTableHandler;
