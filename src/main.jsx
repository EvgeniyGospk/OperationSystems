// src/main.jsx или src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // или App.tsx
import "./index.css"; // Вот эта строка

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
