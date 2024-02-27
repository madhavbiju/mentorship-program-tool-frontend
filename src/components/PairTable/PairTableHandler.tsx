import React, { useState, useEffect } from "react";
import { Stack, Typography } from "@mui/joy";
import { FilterProps, programs } from "./Types";
import { fetchPairData } from "./Api/getPairData";
import PairTableSkeleton from "./PairTableSkeleton";
import PaginationButtons from "../Pagination/Pagination";
import PairTable from "./PairTable";

const PairTableHandler = ({ status, sort, search }: FilterProps) => {
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
    let response = await fetchPairData(pageApi, status, sort, search);
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
          <PairTableSkeleton />
        ) : (
          <>
            {programData.programs.length === 0 ? ( // Check if no programs
              <Typography>No programs to display</Typography>
            ) : (
              <PairTable
                program={programData.programs}
                totalCount={programData.totalCount}
              />
            )}
          </>
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

export default PairTableHandler;
