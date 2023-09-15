import React from "react";
import ReactDOM from "react-dom/client";
import MainTemplate from "./template/MainTemplate";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from "./pages/ErrorComponent/index.jsx";
import Home from "./pages/Home";

import LoginPage from "./pages/LoginPage/index.jsx";
import Cadastro from "./pages/Cadastro/Index";
import HomePrincipal from "./pages/HomePrincipal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "home/:id",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
      {
        path: "",
        element: <HomePrincipal />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
