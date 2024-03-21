import Typography from "@mui/joy/Typography";
import { Box, Breadcrumbs, Grid, Input } from "@mui/joy";
import List from "@mui/joy/List";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ChatListItemHandler from "./ChatListItemHandler";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";

export default function ChatsPane() {
  return (
    <Grid
      sx={{
        borderRight: "1px solid",
        borderColor: "divider",
        height: "calc(100dvh - var(--Header-height))",
        overflowY: "auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link to="/mentor/home" style={{ color: "grey" }} aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Typography color="primary" fontWeight={500} fontSize={12}>
            Chat
          </Typography>
        </Breadcrumbs>
      </Box>
      <Typography level="h2" component="h1">
        Chat
      </Typography>
      <Box sx={{ py: 1.5, pr: 1.5 }}>
        {/* <Input
          size="sm"
          startDecorator={<SearchRoundedIcon />}
          placeholder="Search"
          aria-label="Search"
        /> */}
      </Box>
      <List
        sx={{
          py: 0,
          "--ListItem-paddingY": "0.75rem",
          "--ListItem-paddingX": "1rem",
        }}
      >
        <ChatListItemHandler />
      </List>
    </Grid>
  );
}
