import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

const WaitingForApprovalPage = () => {
  const handleGoHomeClick = () => {
    // Navigate the user to the home page or a dashboard, if applicable
    window.location.href = "/";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "background.body",
      }}
    >
      <Typography level="h1" sx={{ fontSize: "4rem", mb: 2 }}>
        Awaiting Approval
      </Typography>
      <Typography level="h4" sx={{ mb: 3 }}>
        Your account is waiting for admin approval
      </Typography>
      <Typography sx={{ mb: 4 }}>
        Please wait for an administrator to approve your account before you can
        access the platform. If you believe this is an error, please contact
        support.
      </Typography>
      <Button onClick={handleGoHomeClick} sx={{ width: "fit-content" }}>
        Go to Login Screen
      </Button>
    </Box>
  );
};

export default WaitingForApprovalPage;
