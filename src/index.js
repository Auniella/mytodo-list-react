import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { name: "Manger", completed: true, id: "note1", date: "01/01/2024 01:01" },
  { name: "Dormir", completed: false, id: "note2", date: "02/01/2024 01:02" },
  { name: "Marcher", completed: false, id: "note3", date: "03/01/2024 01:03" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
