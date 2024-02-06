import { useEffect, useState } from "react";
import AdminReportPieChart from "./AdminReportPieChart";
import { fetchPieChartData } from "./API/fetchPieChartData";
import { CircularProgress } from "@mui/joy";

const PieChartComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const pieChartData = await fetchPieChartData();
      setData(pieChartData);
    }
    fetchData();
  }, []);

  if (!data) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  const { menteeCount, mentorCount, totalEmployees } = data;

  return (
    <AdminReportPieChart
      menteeCount={menteeCount}
      mentorCount={mentorCount}
      totalEmployeeCount={totalEmployees}
    />
  );
};

export default PieChartComponent;
