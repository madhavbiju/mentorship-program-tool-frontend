import React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

const SelectMenteeDropDown = () => {
  return (
    <div>
      <Select placeholder="Mentee" size="sm">
        <Option value="John">John</Option>
        <Option value="Alice">Alice</Option>
        <Option value="Bob">Bob</Option>
        <Option value="Eve">Eve</Option>
        <Option value="Charlie">Charlie</Option>
      </Select>
    </div>
  );
};

export default SelectMenteeDropDown;
