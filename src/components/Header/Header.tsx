import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import Avatar from "@mui/joy/Avatar";
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
import { Card, CardCover, Modal, ModalClose, useTheme } from "@mui/joy";

export default function Header({notifications}:any) {
  console.log(notifications);
  const [selectedIndex, setSelectedIndex] = React.useState<number>(1);
  const history = useNavigate();
  const createHandleClose = (index: number) => () => {
    if (typeof index === "number") {
      setSelectedIndex(index);
      switch (index) {
        case 1:
          history("/admin/home");
          break;
        case 2:
          history("/mentor/home");
          break;
        case 3:
          history("/mentee/home");
          break;
        default:
          break;
      }
    }
  };
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
          <Tooltip title="Notifications" variant="outlined">
            <IconButton
              size="sm"
              variant="outlined"
              color="neutral"
              component="a"
              href="/blog/first-look-at-joy/"
              sx={{ alignSelf: "center" }}
            >
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
          <ColorSchemeToggle sx={{ ml: "auto" }} />
          {/* <Dropdown>
            <MenuButton startDecorator={<Apps />}>
              {selectedIndex === 1 && "Admin"}
              {selectedIndex === 2 && "Mentor"}
              {selectedIndex === 3 && "Mentee"}
            </MenuButton>
            <Menu>
              <MenuItem
                {...(selectedIndex === 1 && {
                  selected: true,
                  variant: "soft",
                })}
                onClick={createHandleClose(1)}
              >
                Admin
              </MenuItem>
              <MenuItem
                selected={selectedIndex === 2}
                onClick={createHandleClose(2)}
              >
                Mentor
              </MenuItem>
              <MenuItem
                selected={selectedIndex === 3}
                onClick={createHandleClose(3)}
              >
                Mentee
              </MenuItem>
            </Menu>
          </Dropdown> */}
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
                  <Avatar src="" srcSet="" sx={{ borderRadius: "50%" }} />
                  <Box sx={{ ml: 1.5 }}>
                    <Typography level="title-sm" textColor="text.primary">
                      Madhav Biju
                    </Typography>
                    <Typography level="body-xs" textColor="text.tertiary">
                      madhav@email.com
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
              <ListDivider />
              <MenuItem>
                <HelpRoundedIcon />
                Help
              </MenuItem>
              <MenuItem>
                <SettingsRoundedIcon />
                Settings
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
