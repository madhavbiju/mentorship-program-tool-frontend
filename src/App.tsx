import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import AdminDashboard from './pages/admin/dashboard/AdminDashboard';
import { useState } from 'react';

type UserRole = 1 | 2 | 3;
export default function JoyOrderDashboardTemplate() {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
  };
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}
      >
        <Header />
        <Sidebar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            pl: { xs: 2, md: "240px" },
            pr: { xs: 2, md: 2 },
            pt: {
              xs: "calc(12px + var(--Header-height))",
              sm: "calc(12px + var(--Header-height))",
              md: "calc(12px + var(--Header-height))",
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
          }}
        >
           {/* Here */}
         <AdminDashboard/>
            </Box>
      </Box>
    </CssVarsProvider>
  );
}
