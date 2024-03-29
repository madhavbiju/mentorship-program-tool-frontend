import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenteeDashboard from "./pages/mentee/dashboard/MenteeDashboard";
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
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./Authentication/authConfig";
import { UserRoleProvider } from "./pages/common/loginpage/Context/UserRoleContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LoginPage from "./pages/common/loginpage/LoginPage";

const msalInstance = new PublicClientApplication(msalConfig);
import MentorDashboradHandler from "./pages/mentor/dashboard/MentorDashboardHandler";
import ViewUsers from "./pages/admin/user/ViewUsers";

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
            <Route path="home" element={<AdminDashboardHandler />} />
            <Route path="pairs" element={<OrderTable />} />
            <Route path="users" element={<ViewUsers />} />
            <Route path="report" element={<AdminReportPage />} />
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
            <Route path="home" element={<MentorDashboradHandler />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="mentees" element={<MenteesList />} />
            <Route path="tasks" element={<MentorTask />} />
            <Route path="tasks/selected" element={<MentorSelectedTask />} />
            <Route path="tasks/create" element={<CreateTasks />} />
            <Route path="report" element={<MentorReportPage />} />
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
