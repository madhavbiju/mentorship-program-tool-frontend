import { Sheet, ModalClose, Box, Typography, Card } from "@mui/joy";
import { Stack, Tooltip, IconButton, Badge } from "@mui/joy";
import React from "react";
import NotificationComponent from "../Notification/Notification";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationTest = () => {
  interface State {
    openSheet: boolean;
    message: string[];
    notificationCount: number;
  }
  //for showing notification
  const [state, setState] = React.useState<State>({
    openSheet: false,
    message: [], // Add message state
    notificationCount: 0,
  });
  const { openSheet, message } = state;

  const handleClick = (message: string[]) => () => {
    setState((prevState) => ({
      openSheet: !prevState.openSheet, // Toggle openSheet state
      message: [...prevState.message, ...message], // Set message and // Concatenate arrays
      notificationCount: 0,
    }));
  };
  const clearNotification = (changeNotification: () => void) => {
    changeNotification();
    setState((prevState) => ({
      openSheet: !prevState, // Toggle openSheet state
      message: [], // Set message
      notificationCount: 0,
    }));
  };
  return (
    <div>
      <NotificationComponent>
        {(notificationCount, message, changeNotification) => (
          <>
            <Stack direction="row" gap={1.5} alignItems="center">
              <Tooltip title={``}>
                <IconButton
                  onClick={handleClick(message)}
                  disabled={notificationCount === 0}
                >
                  <NotificationsIcon />
                  {notificationCount > 0 && ( // Display count only if greater than 0
                    <Badge badgeContent={notificationCount}></Badge>
                  )}
                </IconButton>
              </Tooltip>
              {/* Other components */}
            </Stack>
            <Sheet
              sx={{
                alignItems: "center",
                px: 1.5,
                py: 1.5,
                ml: "auto",
                width: { xs: "100dvw", md: 400 },
                flexGrow: 1,
                border: "1px solid",
                borderRadius: "8px 8px 8px 8px",
                backgroundColor: "background.level1",
                borderColor: "neutral.outlinedBorder",
                boxShadow: "lg",
                zIndex: 100,
                position: "fixed",
                top: 50,
                right: 24,
                visibility: openSheet ? "visible" : "hidden",
                transition: "transform 0.3s ease",
              }}
            >
              <ModalClose
                id="close-icon"
                onClick={() => clearNotification(changeNotification)}
              />
              <Box sx={{ mb: 2 }}>
                {message.map((message: string) => (
                  <Card>
                    <Typography alignContent={"center"} level="title-sm">
                      {message}
                    </Typography>
                  </Card>
                ))}
              </Box>
            </Sheet>
          </>
        )}
      </NotificationComponent>
    </div>
  );
};

export default NotificationTest;
