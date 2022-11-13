import React from "react";
import { createHashRouter, Outlet } from "react-router-dom";

import { App } from "./App";
import { Copyable } from "./components";
import { ErrorPage } from "./pages";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Outlet /> },
          {
            path: "/components",
            children: [
              { index: true, element: <div>components</div> },
              {
                path: "copyable",
                element: <Copyable />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
