import React from "react";
import ReactDOM from "react-dom/client";
import MainTemplate from "./template/MainTemplate";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./pages/ErrorComponent/index.jsx";
import Home from "./pages/Home";

import LoginPage from "./pages/LoginPage/index.jsx";
import Cadastro from "./pages/Cadastro/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
