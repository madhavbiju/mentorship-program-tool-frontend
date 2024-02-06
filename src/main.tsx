import React from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./Routes.tsx";
import ViewUsers from "./pages/admin/user/ViewUsers.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <AppRouter /> */}
    <ViewUsers />
  </React.StrictMode>
);
