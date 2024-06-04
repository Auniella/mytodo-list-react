import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { name: "Manger", completed: true, id: "note1", date: "01/01/2024 01:01:00" },
  {
    name: "Dormir",
    completed: false,
    id: "note2",
    date: "01/01/2024 02:02:00",
  },
  {
    name: "Marcher",
    completed: false,
    id: "note3",
    date: "01/01/2024 03:03:00",
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
