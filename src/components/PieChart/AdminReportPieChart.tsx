import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";

const AdminReportPieChart = () => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: "Mentors" },
            { id: 1, value: 15, label: "Mentees " },
            { id: 2, value: 20, label: "Users" },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
};

export default AdminReportPieChart;
