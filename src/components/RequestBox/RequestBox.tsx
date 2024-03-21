import React, { useEffect, useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import { ListItemButton, Sheet } from "@mui/joy";
import { RequestBoxProps, requests } from "./Types";
import { RequestModal } from "../ApproveRequestModal/RequestModal";

export default function RequestBox({
  request,
  totalCount,
  setIsApprovedOrNot,
}: RequestBoxProps) {
  const [open, setOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<requests | null>(null);

  const handleClickOpen = (req: requests) => {
    setSelectedRequest(req);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsApprovedOrNot((current) => !current);
  };
  return (
    <>
      {request.length > 0 ? (
        <List
          variant="outlined"
          sx={{
            minWidth: 240,
            borderRadius: "sm",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {request.map((req, index) => (
            <React.Fragment key={index}>
              <ListItemButton onClick={() => handleClickOpen(req)}>
                <ListItemDecorator>
                  <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                </ListItemDecorator>
                <Typography level="body-sm" sx={{ ml: 2 }}>
                  Program Extension Request: {req.programName}
                </Typography>
              </ListItemButton>
              {index < totalCount - 1 && <ListDivider inset="gutter" />}
            </React.Fragment>
          ))}
        </List>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography>No Requests</Typography>
        </Box>
      )}
      <RequestModal
        open={open}
        onClose={handleClose}
        request={selectedRequest}
        modifiedBy={parseInt(sessionStorage.getItem("EmployeeId") || "1")}
      />
    </>
  );
}
