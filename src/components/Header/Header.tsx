import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import Tooltip from "@mui/joy/Tooltip";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import ListDivider from "@mui/joy/ListDivider";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { toggleSidebar } from "../../utils/utils";
import ColorSchemeToggle from "../ColorSchemeToggle/ColorSchemeToggle";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import ToggleRoleButton from "../toggleRoleButton/ToggleRoleButton";
import SearchInput from "../SearchInput/SearchInput";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Card,
  CardCover,
  Modal,
  ModalClose,
  Snackbar,
  SnackbarOrigin,
  useTheme,
} from "@mui/joy";
import { decodeToken } from "../../apiHandler/Decoder";
import NotificationComponent from "../Notification/Notification";

interface State {
  openSheet: boolean;
  message: string;
}

export default function Header() {
  // console.log(notifications);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);
  const history = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [initials, setInitials] = React.useState("");
  function getInitials(name: string) {
    // Split the name into parts
    const parts = name.split(" ");
    // Filter out empty strings in case there are extra spaces
    const filteredParts = parts.filter((part) => part !== "");
    // Map each part to its first character and join them together
    const initials = filteredParts
      .map((part) => part[0].toUpperCase())
      .join("");
    return initials;
  }
  React.useEffect(() => {
    const token = sessionStorage.getItem("jwtToken");
    if (token) {
      const decoded = decodeToken(token);
      if (decoded && decoded.name) {
        // Convert the name to uppercase before setting it
        const upperName = decoded.name.toUpperCase();
        const email = decoded.email;
        setName(upperName);
        setEmail(email);
        // Set initials
        setInitials(getInitials(upperName));
      }
    }
  }, []);
  const { instance } = useMsal();
  const logOut = () => {
    sessionStorage.clear();
    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const [open, setOpen] = React.useState<boolean>(false);

  //for showing notification
  const [state, setState] = React.useState<State>({
    openSheet: false,
    message: "", // Add message state
  });
  const { openSheet, message } = state;

  const handleClick = (message: string) => () => {
    setState((prevState) => ({
      openSheet: !prevState.openSheet, // Toggle openSheet state
      message: message, // Set message
    }));
  };

  return (
    <Sheet
      sx={{
        display: { xs: "flex", md: "flex" },
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        width: "100vw",
        height: "var(--Header-height)",
        zIndex: 10000,
        p: 2,
        gap: 1,
        borderBottom: "1px solid",
        borderColor: "background.level1",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Header-height": "52px",
            [theme.breakpoints.up("md")]: {
              "--Header-height": "52px",
            },
          },
        })}
      />
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="neutral"
        size="sm"
        sx={{ display: { md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Card
            variant="plain"
            sx={{ minWidth: 150, minHeight: 30, flexGrow: 1 }}
          >
            <CardCover>
              {isDarkMode ? (
                <img
                  src="/Assets/TL1.png" // Specify your dark mode image path
                  srcSet="/Assets/TL1.png"
                  loading="lazy"
                  alt=""
                />
              ) : (
                <img
                  src="/Assets/TD1.png" // Specify your default image path
                  srcSet="/Assets/TD1.png"
                  loading="lazy"
                  alt=""
                />
              )}
            </CardCover>
          </Card>
        </Stack>
        <Box
          sx={{
            display: { xs: "none", lg: "inline-flex" },
            alignSelf: "center",
          }}
        >
          <SearchInput />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1.5,
            alignItems: "center",
          }}
        >
          <IconButton
            variant="outlined"
            color="neutral"
            sx={{
              display: { md: "inline-flex", lg: "none" },
              alignSelf: "center",
            }}
            onClick={() => setOpen(true)}
          >
            <SearchRoundedIcon />
          </IconButton>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => setOpen(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Sheet
              variant="outlined"
              sx={{
                maxWidth: 600,
                borderRadius: "md",
                p: 6,
                boxShadow: "lg",
              }}
            >
              <ModalClose variant="plain" sx={{ m: 1 }} />
              <SearchInput />
            </Sheet>
          </Modal>

          <NotificationComponent>
            {(notificationCount, message) => (
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
            )}
          </NotificationComponent>

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
            <Box sx={{ mb: 2 }}>
              <Typography level="title-sm">{message}</Typography>
            </Box>
          </Sheet>

          <ColorSchemeToggle sx={{ ml: "auto" }} />
          <ToggleRoleButton />
          <Dropdown>
            <MenuButton
              variant="plain"
              size="sm"
              sx={{
                maxWidth: "32px",
                maxHeight: "32px",
                borderRadius: "9999999px",
              }}
            >
              <Avatar
                src=""
                srcSet=""
                sx={{ maxWidth: "32px", maxHeight: "32px" }}
              />
            </MenuButton>
            <Menu
              placement="bottom-end"
              size="sm"
              sx={{
                zIndex: "99999",
                p: 1,
                gap: 1,
                "--ListItem-radius": "var(--joy-radius-sm)",
              }}
            >
              <MenuItem>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Avatar src="" srcSet="" sx={{ borderRadius: "50%" }}>
                    {initials}
                  </Avatar>
                  <Box sx={{ ml: 1.5 }}>
                    <Typography level="title-sm" textColor="text.primary">
                      {name}
                    </Typography>
                    <Typography level="body-xs" textColor="text.tertiary">
                      {email}
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
              <ListDivider />
              <MenuItem onClick={logOut}>
                <LogoutRoundedIcon />
                Log out
              </MenuItem>
            </Menu>
          </Dropdown>
        </Box>
      </Box>
    </Sheet>
  );
}
