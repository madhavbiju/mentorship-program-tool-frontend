import React, { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/joy";
import { FilterProps, programs } from "./Types/Index";
import ReportPairDownloadSkeleton from "./ReportPairDownloadSkeleton";
import ReportPairDownload from "./ReportPairDownload";
import PaginationButtons from "../Pagination/Pagination";
import { getPairDownloadData } from "./API/getPairDownloadData";

const ReportPairDownloadHandler = ({ status, sort, search }: FilterProps) => {
  const [programData, settaskData] = useState<{
    programs: programs[];
    totalCount: number;
  }>({
    programs: [],
    totalCount: 0,
  });
  const [pageApi, setPageApi] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getprogramdata = async () => {
    setIsLoading(true); // Set loading state to true while fetching data
    let response = await getPairDownloadData(0, status, sort, search);
    settaskData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getprogramdata();
  }, [status, sort, search]);
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        {isLoading ? ( // Render skeleton if loading
          <ReportPairDownloadSkeleton />
        ) : (
          <>
            {programData.programs.length === 0 ? ( // Check if no programs
              <Typography>No programs to display</Typography>
            ) : (
              <ReportPairDownload
                program={programData.programs}
                totalCount={programData.totalCount}
              />
            )}
          </>
        )}

        <br />
      </Stack>
    </>
  );
};

export default ReportPairDownloadHandler;
