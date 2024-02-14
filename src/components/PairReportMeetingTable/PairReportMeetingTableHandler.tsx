import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import PaginationIcons from "../Pagination/PaginationIcons";
import PairReportMeetingTable from "./PairReportMeetingTable";
import { getPairReportMeetingsData } from "./API/getPairReportMeetingsData";
import { meetings } from "./Types";
import PairReportMeetingTableSkeleton from "./PairReportMeetingTableSkeleton";

const PairReportMeetingTableHandler = ({
  sort,
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

  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getmeetingData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await getPairReportMeetingsData(programid, pageApi, sort);
    setmeetingData(response);
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
        <PairReportMeetingTableSkeleton />
      ) : (
        <>
          {meetingData.meetings.length === 0 ? ( // Check if no meetings
            <Typography>No Meetings to display</Typography>
          ) : (
            <PairReportMeetingTable
              meetings={meetingData.meetings}
              totalCount={pageApi}
            />
          )}
        </>
      )}
    </>
  );
};

export default PairReportMeetingTableHandler;
