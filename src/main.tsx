import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Behandelt Weiterleitungen von 404.html für SPA-Routing
const redirect = sessionStorage.getItem('redirect');
if (redirect) {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', redirect);
}

createRoot(document.getElementById("root")!).render(<App />);
