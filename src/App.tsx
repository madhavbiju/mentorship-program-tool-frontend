import Box from "@mui/joy/Box";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { useState } from "react";
import { Outlet } from "react-router";
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";
import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

const materialTheme = materialExtendTheme();

type UserRole = 1 | 2 | 3;
export default function JoyOrderDashboardTemplate({ role }: { role: string }) {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
  };
  return (
    <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider>
        <CssBaseline enableColorScheme />
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}
        >
          <Header />

          <Sidebar role={role} />
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
            <Outlet />
          </Box>
        </Box>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}
