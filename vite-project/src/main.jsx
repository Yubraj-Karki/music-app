import React from "react";
import ReactDOM from "react-dom/client";
import { SpotifyProvider } from "../context";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SpotifyProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SpotifyProvider>
);
