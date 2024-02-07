import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";

import MentorMenteeTable from "./MentorMenteeTable";
import MentorMenteeTableSkeleton from "./MentorMenteeTableSkeleton";
import { fetchtaskData } from "../ReportTables/ReportTaskTable/API/GetReportData";
import PaginationIcons from "../Pagination/PaginationIcons";
import { programs } from ".";
import { fetchProgramData } from "./API/fetchprogramData";

const MentorMenteeTableHandler: React.FC = () => {
  const [programData, settaskData] = useState<{
    programs: programs[];
    totalCount: number;
  }>({
    programs: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getprogramdata = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchProgramData(pageApi);
    settaskData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getprogramdata();
  }, [pageApi]);
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
          total={programData.totalCount}
          perPage={5}
          setPageApi={setPageApi}
        />
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <MentorMenteeTableSkeleton />
      ) : (
        <MentorMenteeTable
          program={programData.programs}
          totalCount={pageApi}
        />
      )}
    </>
  );
};

export default MentorMenteeTableHandler;
