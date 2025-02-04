import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./Accueil.tsx";
import { Competences } from "./Competences.tsx";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/competences",
      element: <Competences />,
    },
  ],
  { basename: "/portfolio-final" }
);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("L'élément #root est introuvable dans le DOM.");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
