import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import JoySignInSideTemplate from "./pages/common/login/Login";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import MenteeDashboard from "./pages/mentee/dashboard/MenteeDashboard";
import MentorDashboard from "./pages/mentor/dashboard/MentorDashboard";
import OrderTable from "./pages/admin/pairs/OrderTable";
import App from "./App";
import CalendarPage from "./pages/common/calendar/CalendarPage";
import MentorReport from "./components/mentorreport/MentorReport";
import MenteesList from "./pages/mentor/menteesList/MenteesList";
import MentorTask from "./pages/mentor/mentorTask/MentorTask";
import AdminReport from "./components/adminreport/AdminReport";
import MenteeReport from "./components/pairreport/PairReport";
import CreatePairCard from "./pages/admin/createPair/CreatePairCard";
import PairReport from "./components/pairreport/PairReport";
import AdminReportPage from "./pages/admin/report/AdminReportPage";
import MentorReportPage from "./pages/mentor/report/MentorReportPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<App role="admin" />}>
        <Route path="home" element={<AdminDashboard />} />
        <Route path="pairs" element={<OrderTable />} />
        <Route path="report" element={<AdminReportPage />} />
        <Route path="report/overall" element={<AdminReport />} />
        <Route path="report/mentor" element={<MentorReport />} />
        <Route path="report/pair" element={<PairReport />} />

        <Route path="pairs/create" element={<CreatePairCard />} />
      </Route>
      <Route path="/mentee" element={<App role="mentee" />}>
        <Route path="home" element={<MenteeDashboard />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="report" element={<MenteeReport />} />
      </Route>
      <Route path="/mentor" element={<App role="mentor" />}>
        <Route path="home" element={<MentorDashboard />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="mentees" element={<MenteesList />} />
        <Route path="tasks" element={<MentorTask />} />
        <Route path="report" element={<MentorReportPage />} />
      </Route>
    </Routes>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AppRouter;
