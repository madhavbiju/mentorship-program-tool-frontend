import Select from "@mui/joy/Select";
import React from "react";
import Option from "@mui/joy/Option";

const SortByMentorMenteeTable = () => {
  return (
    <div>
      <Select placeholder={"Sort"} size="sm">
        <Option value="mentorName">Mentor Name</Option>
        <Option value="menteeName">Mentee Name</Option>
        <Option value="endDate">End Date</Option>
      </Select>
    </div>
  );
};

export default SortByMentorMenteeTable;
