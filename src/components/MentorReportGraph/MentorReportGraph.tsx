import { BarChart } from "@mui/x-charts/BarChart";
import React from "react";

const MentorReportGraph = () => {
  const tasks = [50, 90, 30, 40];
  const xLabels = ["Shiyas", "Madhav", "Mehanoor", "Aadarsh"];
  return (
    <BarChart
      width={500}
      height={300}
      series={[{ data: tasks, label: "Progress" }]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
};

export default MentorReportGraph;
