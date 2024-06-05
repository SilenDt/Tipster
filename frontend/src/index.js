import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

console.log("Index.js is being executed");

const container = document.getElementById("root"); // Use 'root' to your HTML
const root = createRoot(container); 
root.render(<App />);

