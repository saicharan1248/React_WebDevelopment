import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; // Ensure this path is correct
// import "./styles.css"; // Ensure this path is correct

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
