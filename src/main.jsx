import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { App } from "./Accueil.jsx"
import { Competences } from "./Competences.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/competences",
    element: <Competences />,
  },
], {basename: "/portfolio-final"});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
