import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography, Skeleton, Card, CardContent } from "@mui/joy";
import { programs } from "./Types";
import { fetchPairData } from "./Api/getPairData";
import PairTableSkeleton from "./PairTableSkeleton";
import PairTable from "./PairTable";
import PaginationButtons from "../Pagination/Pagination";

const PairTableHandler: React.FC = () => {
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
    let response = await fetchPairData(pageApi);
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
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        {isLoading ? ( // Render skeleton if loading
          <PairTableSkeleton />
        ) : (
          <PairTable
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

export default PairTableHandler;
