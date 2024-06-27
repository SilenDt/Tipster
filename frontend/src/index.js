import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';


console.log("Index.js is being executed");

const container = document.getElementById("root"); // Make sure this matches the id in your HTML file
const root = createRoot(container);
root.render(<App />);
