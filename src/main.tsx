import ReactDOM from "react-dom/client";

import AppRouter from "./Routes";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <AppRouter /> <ToastContainer style={{ marginTop: 40 }} />
  </>
);
