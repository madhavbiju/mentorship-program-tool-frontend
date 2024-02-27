// JoySignInSideTemplate.tsx
import React from "react";
import { Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const JoySignInSideTemplate = () => {
  const history = useNavigate();
  const handleRoleClick = (roleID: number) => {
    // You can implement the logic to store roleID in state or context
    // and then redirect to PrivateRoutes
    // For now, let's assume you're storing roleID in localStorage
    localStorage.setItem("roleID", String(roleID));

    return history("/");
  };

  return (
    <div>
      <Button onClick={() => handleRoleClick(1)}>Admin</Button>
      <Button onClick={() => handleRoleClick(2)}>Mentor</Button>
      <Button onClick={() => handleRoleClick(3)}>Mentee</Button>
    </div>
  );
};

export default JoySignInSideTemplate;
