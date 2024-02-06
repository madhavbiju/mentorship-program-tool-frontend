import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography } from "@mui/joy";
import PaginationButtons from "../Pagination/Pagination";
import PairTable from "./PairTable";
import { fetchPairData } from "./Api/getPairData";
import PairTableSkeleton from "./PairTableSkeleton";

const PairTableHandler: React.FC = () => {
  const [pairData, setPairData] = useState<{
    users: User[];
    total: number;
  }>({
    users: [],
    total: 0,
  });
  const [pageApi, setPageApi] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPairData = async () => {
    setIsLoading(true);
    let response = await fetchPairData(pageApi);
    setPairData(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getPairData();
  }, [pageApi]);

  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {isLoading ? ( // Render skeleton if loading
          <PairTableSkeleton />
        ) : (
          <PairTable users={pairData.users} />
        )}

        <br />
        <PaginationButtons count={pairData.total} setPageApi={setPageApi} />
      </Stack>
    </>
  );
};

export default PairTableHandler;
