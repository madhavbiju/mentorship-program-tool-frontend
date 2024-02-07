import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";
import { AdminReportPieChartProps } from ".";

const AdminReportPieChart: React.FC<AdminReportPieChartProps> = ({
  menteeCount,
  mentorCount,
  totalEmployeeCount,
}) => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: menteeCount, label: "Mentees" },
            { id: 1, value: mentorCount, label: "Mentors" },
            {
              id: 2,
              value: totalEmployeeCount - (menteeCount + mentorCount),
              label: "Unallocated",
            },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
};

export default AdminReportPieChart;
