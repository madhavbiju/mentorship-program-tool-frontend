import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import JoySignInSideTemplate from "./pages/common/login/Login";
import AdminDashboard from "./pages/admin/dashboard/AdminDashboard";
import MenteeDashboard from "./pages/mentee/dashboard/MenteeDashboard";
import MentorDashboard from "./pages/mentor/dashboard/MentorDashboard";
import OrderTable from "./pages/admin/pairs/Pairs";
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
import MentorSelectedTask from "./pages/mentor/mentorselectedtask/MentorSelectedTask";
import CreateTasks from "./pages/mentor/createtask/CreateTasks";
import AdminDashboardHandler from "./pages/admin/dashboard/AdminDashboardHandle";
import MentorDashboradHandler from "./pages/mentor/dashboard/MentorDashboardHandler";
import MenteesListHandler from "./components/MenteesList/MenteesListHandler";
import Notification from "./components/Notification/Notification";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<App role="admin" />}>
        <Route path="home" element={<AdminDashboardHandler />} />
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
        <Route path="home" element={<MentorDashboradHandler />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="mentees" element={<MenteesList />} />
        <Route path="tasks" element={<MentorTask />} />
        <Route path="tasks/selected" element={<MentorSelectedTask />} />
        <Route path="tasks/create" element={<CreateTasks />} />
        <Route path="report" element={<MentorReportPage />} />
      </Route>
    </Routes>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <Notification>
      <AppRoutes />
      </Notification>
    </Router>
  );
};

export default AppRouter;
