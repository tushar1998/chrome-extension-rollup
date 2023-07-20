import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

export const initialize = () => {
  const shadowHost = document.createElement("apollo-appsync");
  shadowHost.setAttribute("id", "apollo-appsync");
  const shadowRoot = shadowHost.attachShadow({ mode: "open" });

  document.body.insertAdjacentElement("afterend", shadowHost);

  document.body.setAttribute("style", "width: 70vw");
  shadowHost.setAttribute("style", "position:absolute;width:30vw;margin-left:70vw;top:0");

  createRoot(shadowRoot).render(<App />);
};
