import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import AuditSimulator from "./pages/AuditSimulator";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<App />} />

      <Route
        path="/ai-audit-simulator"
        element={<AuditSimulator />}
      />

    </Routes>

  </BrowserRouter>

);