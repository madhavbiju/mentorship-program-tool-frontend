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
import CreatePair from "./pages/admin/createPair/CreatePair";
import MenteesList from "./pages/mentor/menteesList/MenteesList";
import MentorTask from "./pages/mentor/mentorTask/MentorTask";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<App role="admin" />}>
        <Route path="home" element={<AdminDashboard />} />
        <Route path="pairs" element={<OrderTable />} />
        <Route path="pairs/create" element={<CreatePair />} />
      </Route>
      <Route path="/mentee" element={<App role="mentee" />}>
        <Route path="home" element={<MenteeDashboard />} />
      </Route>
      <Route path="/mentor" element={<App role="mentor" />}>
        <Route path="home" element={<MentorDashboard />} />
        <Route path="mentees" element={<MenteesList />} />
        <Route path="tasks" element={<MentorTask />} />
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
