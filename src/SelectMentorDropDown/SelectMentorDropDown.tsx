import Select from "@mui/joy/Select";
import React from "react";
import Option from "@mui/joy/Option";

const SelectMentorDropDown = () => {
  return (
    <div>
      <Select placeholder={"Mentor"} size="sm">
        <Option value="Shiyas">Shiyas</Option>
        <Option value="Aadarsh">Aadarsh</Option>
        <Option value="Madhav">Madhav</Option>
        <Option value="Mehanoor">Mehanoor</Option>
      </Select>
    </div>
  );
};

export default SelectMentorDropDown;
