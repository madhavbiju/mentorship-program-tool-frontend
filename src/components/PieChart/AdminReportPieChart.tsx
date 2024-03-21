import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";
import { AdminReportPieChartProps } from ".";
import {
  blueberryTwilightPalette,
  mangoFusionPalette,
  cheerfulFiestaPalette,
} from "@mui/x-charts/colorPalettes";

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
      width={380}
      height={160}
      colors={mangoFusionPalette}
    />
  );
};

export default AdminReportPieChart;
