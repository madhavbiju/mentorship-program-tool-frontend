import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import PaginationIcons from "../Pagination/PaginationIcons";
import AdminPairReportTaskTable from "./AdminPairReportTaskTable";
import AdminPairReportTaskTableSkeleton from "./AdminPairReportTaskTableSkeleton";
import { fetchtaskData } from "./API/fetchtaskData";
import { tasks } from "./Types";

const AdminPairReportTaskTableHandler = ({
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const gettaskData = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await fetchtaskData(programid);
    settaskData(response);

    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    gettaskData();
  }, [programid]);
  return (
    <>
      {isLoading ? (
        <AdminPairReportTaskTableSkeleton />
      ) : (
        <>
          {taskData.tasks.length === 0 ? (
            <Typography>No Task data to display</Typography>
          ) : (
            <AdminPairReportTaskTable task={taskData.tasks} totalCount={0} />
          )}
        </>
      )}
    </>
  );
};

export default AdminPairReportTaskTableHandler;
