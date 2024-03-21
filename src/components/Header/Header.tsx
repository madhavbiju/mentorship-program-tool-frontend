import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import ListDivider from "@mui/joy/ListDivider";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { toggleSidebar } from "../../utils/utils";
import ColorSchemeToggle from "../ColorSchemeToggle/ColorSchemeToggle";
import { useNavigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import ToggleRoleButton from "../toggleRoleButton/ToggleRoleButton";
import SearchInput from "../SearchInput/SearchInput";
import { Avatar, Card, CardCover, Modal, ModalClose, useTheme } from "@mui/joy";
import { decodeToken } from "../../apiHandler/Decoder";
import NotificationTest from "../NotificationButton/NotificationTest";

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

  return (
    <Sheet
      color="neutral"
      variant="soft"
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
        borderBottom: 1,
        borderColor: "divider",
        boxShadow: 3,
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
            color="neutral"
            variant="soft"
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

          <NotificationTest />

          <ColorSchemeToggle sx={{ ml: "auto" }} />
          <ToggleRoleButton />
          <Dropdown>
            <MenuButton
              variant="solid"
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
