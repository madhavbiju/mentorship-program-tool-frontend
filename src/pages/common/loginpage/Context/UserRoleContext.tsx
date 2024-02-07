import React, { createContext, useContext, useState } from "react";

type UserRoleContextType = {
  userRoles: string[];
  setUserRoles: (roles: string[]) => void;
};

const UserRoleContext = createContext<UserRoleContextType | undefined>(
  undefined
);

export const useUserRole = () => {
  const context = useContext(UserRoleContext);
  if (!context) {
    throw new Error("useUserRole must be used within a UserRoleProvider");
  }
  return context;
};

export const UserRoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userRoles, setUserRoles] = useState<string[]>(() => {
    // Initialize state from sessionStorage
    const storedRoles = sessionStorage.getItem("userRoles");
    return storedRoles ? JSON.parse(storedRoles) : [];
  });

  return (
    <UserRoleContext.Provider value={{ userRoles, setUserRoles }}>
      {children}
    </UserRoleContext.Provider>
  );
};
