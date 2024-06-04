import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { name: "Manger", completed: true, id: "note1", date: "2024-01-01T01:01:00" },
  { name: "Dormir", completed: false, id: "note2", date: "2024-01-02T02:02:00" },
  { name: "Marcher", completed: false, id: "note3", date: "2024-01-03T03:03:00" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
