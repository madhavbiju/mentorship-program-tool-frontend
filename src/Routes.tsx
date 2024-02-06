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
import MentorReport from "./pages/mentor/report/MentorReport";
import MenteesList from "./pages/mentor/menteesList/MenteesList";
import MentorTask from "./pages/mentor/mentorTask/MentorTask";
import AdminReport from "./pages/admin/report/AdminReport";
import MenteeReport from "./pages/common/pairReport/PairReport";
import CreatePairCard from "./pages/admin/createPair/CreatePairCard";
import PairReport from "./pages/common/pairReport/PairReport";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./Authentication/authConfig";
import { UserRoleProvider } from "./pages/common/loginpage/Context/UserRoleContext";
import ProtectedRoute from "./pages/common/loginpage/ProtectedRoute";
import LoginPage from "./pages/common/loginpage/LoginPage";

const msalInstance = new PublicClientApplication(msalConfig);

const AppRoutes = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <UserRoleProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <App role="admin" />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<AdminDashboard />} />
            <Route path="pairs" element={<OrderTable />} />
            <Route path="report/overall" element={<AdminReport />} />
            <Route path="report/mentor" element={<MentorReport />} />
            <Route path="report/pair" element={<PairReport />} />

            <Route path="pairs/create" element={<CreatePairCard />} />
          </Route>
          <Route
            path="/mentee"
            element={
              <ProtectedRoute allowedRoles={["mentee"]}>
                <App role="mentee" />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<MenteeDashboard />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="report" element={<MenteeReport />} />
          </Route>
          <Route
            path="/mentor"
            element={
              <ProtectedRoute allowedRoles={["mentor"]}>
                <App role="mentor" />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<MentorDashboard />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="mentees" element={<MenteesList />} />
            <Route path="tasks" element={<MentorTask />} />
            <Route path="report/pair" element={<PairReport />} />
            <Route path="report/mentor" element={<MentorReport />} />
          </Route>
        </Routes>
      </UserRoleProvider>
    </MsalProvider>
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
