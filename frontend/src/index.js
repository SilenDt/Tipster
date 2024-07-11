import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

console.log("Index.js is being executed");

const container = document.getElementById("root"); // Make sure this matches the id in your HTML file
const root = createRoot(container);
root.render(

<Auth0Provider
    domain="dev-q66y6dvdxr2ctjba.uk.auth0.com"
    clientId="GuYbfa72FTADnAvHXu5DIsQSyTPrr80O"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,

);
