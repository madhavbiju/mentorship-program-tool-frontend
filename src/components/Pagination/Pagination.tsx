import { Pagination } from "@mui/material"; // Assuming you are using Material-UI components
import { CustomPaginationProps } from "./types";

function PaginationButtons({ count, setPageApi }: CustomPaginationProps) {
  return (
    <>
      <Pagination
        variant="outlined"
        shape="rounded"
        count={count}
        onChange={(e: any, value: number) => setPageApi(value)}
      />
    </>
  );
}

export default PaginationButtons;
