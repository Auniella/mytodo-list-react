import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const DATA = [
  { name: "Manger", completed: true, id: "note1" },
  { name: "Dormir", completed: false, id: "note2" },
  { name: "Marcher", completed: false, id: "note3" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
