import { Box, IconButton, Typography } from "@mui/joy";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, { useState } from "react";
import { CustomPaginationProps } from "./types";

const PaginationIcons = ({ count, setPageApi }: CustomPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(count / 5); // Assuming 10 items per page

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setPageApi(currentPage + 1); // Assuming setPageApi sets the current page in the parent component
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setPageApi(currentPage - 1); // Assuming setPageApi sets the current page in the parent component
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        sx={{ mr: 1 }}
        aria-label="previous page"
        variant="outlined"
        color="neutral"
        size="sm"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton
        aria-label="next page"
        variant="outlined"
        color="neutral"
        size="sm"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
};

export default PaginationIcons;
