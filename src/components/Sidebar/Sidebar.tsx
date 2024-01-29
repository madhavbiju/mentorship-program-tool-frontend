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

import { closeSidebar } from "../../utils/utils";

export default function Sidebar({ role }: { role: string }) {
  const [selectedItem, setSelectedItem] = React.useState("Home"); // Initialize the selected item
  const history = useNavigate();

  const handleItemClick = (itemName: string) => {
    setSelectedItem(itemName); // Update the selected item when clicked
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
                selected={selectedItem === "Home"}
                onClick={() => handleItemClick("Home")}
              >
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Home</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Users"}
                onClick={() => handleItemClick("Users")}
              >
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Users</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Pairs"}
                onClick={() => handleItemClick("Pairs")}
              >
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Pairs</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Report"}
                onClick={() => handleItemClick("Report")}
              >
                <DashboardRoundedIcon />
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
            {/* Admin specific list items */}
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Home"}
                onClick={() => handleItemClick("Home")}
              >
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Home</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Calendar"}
                onClick={() => handleItemClick("Calendar")}
              >
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Calendar</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Mentees"}
                onClick={() => handleItemClick("Mentees")}
              >
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Mentees</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Tasks"}
                onClick={() => handleItemClick("Tasks")}
              >
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Tasks</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Chat"}
                onClick={() => handleItemClick("Chat")}
              >
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Chat</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            {/* Add more admin specific list items here */}
          </>
        );

      case "mentee":
        return (
          <>
            {/* Admin specific list items */}
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Home"}
                onClick={() => handleItemClick("Home")}
              >
                <HomeRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Home</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Calendar"}
                onClick={() => handleItemClick("Calendar")}
              >
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Calendar</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Tasks"}
                onClick={() => handleItemClick("Tasks")}
              >
                <DashboardRoundedIcon />
                <ListItemContent>
                  <Typography level="title-sm">Tasks</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                selected={selectedItem === "Chat"}
                onClick={() => handleItemClick("Chat")}
              >
                <DashboardRoundedIcon />
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
