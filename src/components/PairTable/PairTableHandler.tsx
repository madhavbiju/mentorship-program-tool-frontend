import React, { useState, useEffect } from "react";
import axios from "axios";
import { Stack, Typography } from "@mui/joy";
import PaginationButtons from "../Pagination/Pagination";
import PairTable from "./PairTable";
import { fetchPairData } from "./Api/getPairData";

const PairTableHandler: React.FC = () => {
  const [pairData, setPairData] = useState<{
    users: User[];
    total: number;
  }>({
    users: [],
    total: 0,
  });
  const [pageApi, setPageApi] = useState<number>(0);

  const getPairData = async () => {
    let response = await fetchPairData(pageApi);
    setPairData(response);
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
        <PairTable users={pairData.users} />
        <br />
        <PaginationButtons count={pairData.total} setPageApi={setPageApi} />
      </Stack>
    </>
  );
};

export default PairTableHandler;
