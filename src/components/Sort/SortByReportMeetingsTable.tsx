import Select from "@mui/joy/Select";
import React from "react";
import Option from "@mui/joy/Option";

const SortByReportMeetingsTable = () => {
  return (
    <div>
      <Select placeholder={"Sort"} size="sm">
        <Option value="Meeting Name">Mentee Name</Option>

        <Option value="Meeting Name">Meeting Name</Option>
        <Option value="Scheduled Date">Scheduled Date</Option>
        <Option value="Scheduled Time">Scheduled Time</Option>
        <Option value="Status">Status</Option>
      </Select>
    </div>
  );
};

export default SortByReportMeetingsTable;
