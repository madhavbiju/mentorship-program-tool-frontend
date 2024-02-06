// admindashboardhandler.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ActiveCountData } from "./Types";
import AdminDashboard from "./AdminDashboard";
import { fetchActiveCount } from "./Api/GetActiveCount";

const AdminDashboardHandler: React.FC = () => {
  const [activeCount, setActiveCount] = useState<ActiveCountData>({
    menteeCount: 0,
    mentorCount: 0,
    activePairCount: 0,
  });

  const getActiveCountData = async () => {
    let response = await fetchActiveCount();
    setActiveCount(response);
  };

  useEffect(() => {
    getActiveCountData();
  }, []);

  return <AdminDashboard data={activeCount} />;
};

export default AdminDashboardHandler;
