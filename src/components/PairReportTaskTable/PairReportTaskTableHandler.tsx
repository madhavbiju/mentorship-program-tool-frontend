import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import PaginationIcons from "../Pagination/PaginationIcons";
import { Sort, tasks } from "../ReportTables/ReportTaskTable";
import { fetchtaskData } from "./API/getPairReportData";
import PairReportTaskTable from "./PairReportTaskTable";
import PairReportTaskTableSkeleton from "./PairReportTaskTableSkeleton";

const PairReportTaskTableHandler = ({
  sort,
  programid,
}: {
  sort: string;
  programid: number;
}) => {
  const [taskData, settaskData] = useState<{
    tasks: tasks[];
    totalCount: number;
  }>({
    tasks: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const gettaskData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchtaskData(programid, pageApi, sort);
    settaskData(response);
    console.log("taskData.tasks");
    console.log(taskData);

    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    gettaskData();
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
          total={taskData.totalCount}
          perPage={5}
          setPageApi={setPageApi}
        />
      </Stack>
      {isLoading ? ( // Render skeleton if loading
        <PairReportTaskTableSkeleton />
      ) : (
        <PairReportTaskTable task={taskData.tasks} totalCount={pageApi} />
      )}
    </>
  );
};

export default PairReportTaskTableHandler;