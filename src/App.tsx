import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AdminDashboard from './components/Pages/AdminDashboard';

export default function JoyOrderDashboardTemplate() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex',flexDirection: 'column', minHeight: '100dvh' }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            pl: { xs: 2, md: '240px' },
            pr: {xs:2, md:2},
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 'calc(12px + var(--Header-height))',
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
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
