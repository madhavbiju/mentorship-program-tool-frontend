import { AspectRatio, Grid } from "@mui/joy";
import ChatsPane from "../../../components/Messages/ChatsPane";
import { Card } from "@mui/joy";

export default function Chat() {
  return (
    <>
      <Grid container>
        <Grid
          sx={{
            zIndex: 100,
            width: { sm: 4 / 4, md: 1 / 4 },
            top: 52,
          }}
        >
          <ChatsPane />
        </Grid>
        <Grid
          sx={{
            position: { sm: "none", md: "fixed" },
            height: {
              xs: "calc(100dvh - var(--Header-height))",
            },
            width: 4 / 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Card sx={{ minWidth: 130 }}>
            <img
              src="/Assets/teams.svg"
              srcSet="/Assets/teams.svg"
              loading="lazy"
              alt=""
            />
          </Card>
          <br />
          Click on a Mentee from the list to <br />
          open their chat on Teams.
        </Grid>
      </Grid>
    </>
  );
}
