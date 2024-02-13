import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import { decodeToken } from "../../apiHandler/Decoder";
import { Dropdown, MenuButton, Menu, MenuItem } from "@mui/joy";
import Apps from "@mui/icons-material/Apps";

interface RoleItem {
  id: number;
  name: string;
}

const ToggleRoleButton = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [roles, setRoles] = useState<RoleItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const token = sessionStorage.getItem("jwtToken");
    if (token) {
      try {
        const decoded = decodeToken(token);
        if (
          decoded &&
          decoded[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ]
        ) {
          const rolesClaim =
            decoded[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ];
          let roleItems: RoleItem[] = [];
          if (Array.isArray(rolesClaim)) {
            roleItems = rolesClaim.map((role: string, index: number) => ({
              id: index + 1,
              name: formatRoleName(role),
            }));
          } else {
            roleItems = [{ id: 1, name: formatRoleName(rolesClaim) }];
          }
          setRoles(roleItems);
          setSelectedIndex(roleItems[0]?.id || 0);
        }
      } catch (error) {
        console.error("Failed to decode token or set roles:", error);
      }
    }
  }, []);

  const createHandleClose = (id: number) => () => {
    setSelectedIndex(id);
    const selectedRole = roles.find((role) => role.id === id);
    if (selectedRole) {
      switch (selectedRole.name.toLowerCase()) {
        case "admin":
          navigate("/admin/home");
          break;
        case "mentor":
          navigate("/mentor/home");
          break;
        case "mentee":
          navigate("/mentee/home");
          break;
        default:
          break;
      }
    }
  };

  const formatRoleName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  const isDropdownDisabled = roles.length === 1;

  return (
    <Dropdown>
      <MenuButton startDecorator={<Apps />} disabled={isDropdownDisabled}>
        {formatRoleName(
          roles.find((role) => role.id === selectedIndex)?.name || "Select Role"
        )}
      </MenuButton>
      {!isDropdownDisabled && (
        <Menu>
          {roles.map((role) => (
            <MenuItem
              key={role.id}
              selected={selectedIndex === role.id}
              onClick={createHandleClose(role.id)}
            >
              {formatRoleName(role.name)}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Dropdown>
  );
};

export default ToggleRoleButton;
