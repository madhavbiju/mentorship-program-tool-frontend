import { BarChart } from "@mui/x-charts/BarChart";
import React from "react";

const MenteeTaskGraph = () => {
  const tasks = [5, 10, 3, 4, 7];
  const meetings = [2, 8, 1, 3, 4];
  const xLabels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"];
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: tasks, label: "Tasks" },
        { data: meetings, label: "Meetings" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
};
export default MenteeTaskGraph;
