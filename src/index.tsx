import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Side } from "./screens/Side/Side";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Side />
  </StrictMode>,
);
