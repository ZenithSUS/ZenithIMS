import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/global.css";

import AppRouter from "./AppRouter.tsx";
import Providers from "./providers/index.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </StrictMode>,
);
