import * as React from "react";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { AspectRatio, Card, Typography, styled } from "@mui/joy";
import FileUploadRoundedIcon from "@mui/icons-material/FileUploadRounded";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const FileUploadButton = () => {
  return (
    <Card
      variant="soft"
      sx={[
        {
          borderRadius: "sm",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
          px: 3,
          flexGrow: 1,
          boxShadow: "none",
        },
      ]}
    >
      {" "}
      <AspectRatio
        ratio="1"
        variant="solid"
        color="primary"
        sx={{
          minWidth: 32,
          borderRadius: "50%",
          "--Icon-fontSize": "16px",
        }}
      >
        <div>{<FileUploadRoundedIcon />}</div>
      </AspectRatio>
      <Typography level="body-sm" textAlign="center">
        <Button
          component="label"
          role={undefined}
          tabIndex={-1}
          variant="plain"
        >
          Click to upload
          <VisuallyHiddenInput type="file"></VisuallyHiddenInput>
        </Button>
        <br /> PNG, JPG, DOCX or PDF
      </Typography>
    </Card>
  );
};

export default FileUploadButton;
