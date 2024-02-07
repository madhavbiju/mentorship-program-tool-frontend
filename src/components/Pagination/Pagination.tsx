import { Pagination } from "@mui/material"; // Assuming you are using Material-UI components
import { CustomPaginationProps } from "./types";

function PaginationButtons({
  total,
  perPage,
  setPageApi,
}: CustomPaginationProps) {
  const totalPages = Math.ceil(total / perPage);
  return (
    <>
      <Pagination
        count={totalPages}
        onChange={(e: any, value: number) => setPageApi(value)}
      />
    </>
  );
}

export default PaginationButtons;
