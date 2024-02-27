import React, { useState, useEffect } from "react";
import { Stack } from "@mui/joy";

import PaginationButtons from "../Pagination/Pagination";
import { FilterProps } from "../MentorTaskCard/Types";
import { programs } from ".";
import MentorMenteeTableSkeleton from "./MentorMenteeTableSkeleton";
import MentorMenteeTable from "./MentorMenteeTable";
import { fetchprogramData } from "./API/fetchprogramData";

const MentorMenteeTableHandler = ({ status, sort, search }: FilterProps) => {
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
    let response = await fetchprogramData(pageApi, status, sort, search);
    settaskData(response);
    setIsLoading(false); // Set loading state to false after fetching data
  };

  useEffect(() => {
    getprogramdata();
  }, [pageApi, status, sort, search]);
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
          <MentorMenteeTableSkeleton />
        ) : (
          <MentorMenteeTable
            program={programData.programs}
            totalCount={programData.totalCount}
          />
        )}

        <br />
        <PaginationButtons
          total={programData.totalCount}
          perPage={6}
          setPageApi={setPageApi}
        />
      </Stack>
    </>
  );
};

export default MentorMenteeTableHandler;
