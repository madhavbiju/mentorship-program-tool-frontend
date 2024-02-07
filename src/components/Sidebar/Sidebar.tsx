import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import { useNavigate } from "react-router-dom";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import PeopleIcon from "@mui/icons-material/People";
import TaskIcon from "@mui/icons-material/Task";
import ChatIcon from "@mui/icons-material/Chat";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { closeSidebar } from "../../utils/utils";

export default function Sidebar({ role }: { role: string }) {
  const [selectedItem, setSelectedItem] = React.useState("Home"); // Initialize the selected item
  const history = useNavigate();

  React.useEffect(() => {
    // Extract the pathname from the location object
    const pathname = location.pathname;
    // Update the selected item based on the pathname
    setSelectedItem(pathname);
  }, [location.pathname]);

  const handleItemClick = (itemName: string) => {
    history(itemName);
  };

  const renderListItems = () => {
    switch (role) {
      case "admin":
        return (
          <>
            {/* Admin specific list items */}
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/admin/home")}
                onClick={() => handleItemClick("home")}
              >
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Home</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/admin/users")}
                onClick={() => handleItemClick("users")}
              >
                <AdminPanelSettingsIcon />
                <ListItemContent>
                  <Typography level="title-sm">Users</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/admin/pairs")}
                onClick={() => handleItemClick("pairs")}
              >
                <SocialDistanceIcon />
                <ListItemContent>
                  <Typography level="title-sm">Pairs</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/admin/report")}
                onClick={() => handleItemClick("report")}
              >
                <AssessmentIcon />
                <ListItemContent>
                  <Typography level="title-sm">Report</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            {/* Add more admin specific list items here */}
          </>
        );

      case "mentor":
        return (
          <>
            {/* mentor specific list items */}
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/mentor/home")}
                onClick={() => handleItemClick("home")}
              >
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Home</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/mentor/calendar")}
                onClick={() => handleItemClick("calendar")}
              >
                <InsertInvitationIcon />
                <ListItemContent>
                  <Typography level="title-sm">Calendar</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/mentor/mentees")}
                onClick={() => handleItemClick("mentees")}
              >
                <PeopleIcon />
                <ListItemContent>
                  <Typography level="title-sm">Mentees</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/mentor/tasks")}
                onClick={() => handleItemClick("tasks")}
              >
                <TaskIcon />
                <ListItemContent>
                  <Typography level="title-sm">Tasks</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/mentor/report")}
                onClick={() => handleItemClick("report")}
              >
                <AssessmentIcon />
                <ListItemContent>
                  <Typography level="title-sm">Report</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/mentor/chat")}
                onClick={() => handleItemClick("chat")}
              >
                <ChatIcon />
                <ListItemContent>
                  <Typography level="title-sm">Chat</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            {/* Add more mentor specific list items here */}
          </>
        );

      case "mentee":
        return (
          <>
            {/* mentee specific list items */}
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/mentee/home")}
                onClick={() => handleItemClick("home")}
              >
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Home</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/mentee/calendar")}
                onClick={() => handleItemClick("calendar")}
              >
                <InsertInvitationIcon />

                <ListItemContent>
                  <Typography level="title-sm">Calendar</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/mentee/tasks")}
                onClick={() => handleItemClick("tasks")}
              >
                <TaskIcon />
                <ListItemContent>
                  <Typography level="title-sm">Tasks</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem.includes("/mentee/chat")}
                onClick={() => handleItemClick("chat")}
              >
                <ChatIcon />
                <ListItemContent>
                  <Typography level="title-sm">Chat</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            {/* Add more admin specific list items here */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "fixed" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        mt: "var(--Header-height)",
        transition: "transform 0.4s, width 0.4s",
        zIndex: 9995,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "220px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />

      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          {renderListItems()}
        </List>
      </Box>
    </Sheet>
  );
}
