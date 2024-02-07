import Select from "@mui/joy/Select";
import React from "react";
import Option from "@mui/joy/Option";

const SortByReportTaskTable = () => {
  return (
    <div>
      <Select placeholder={"Sort"} size="sm">
        <Option value="Start Date">Mentee Name</Option>
        <Option value="Title">Title</Option>
        <Option value="Start Date">Assigned Date</Option>
        <Option value="End Date">Submission Date</Option>
        <Option value="Status">Status</Option>
      </Select>
    </div>
  );
};

export default SortByReportTaskTable;
