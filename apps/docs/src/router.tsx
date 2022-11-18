import { createHashRouter, Outlet } from "react-router-dom";

import { App } from "./App";
import { ErrorPage } from "./pages";
import { ComponentsIndex } from "./pages/ComponentsIndex";
import { registry } from "./registry";
import { Story } from "./Story";

const componentRoutes = registry.map((item) => ({
  path: item.absolutePath,
  // @ts-ignore
  element: <Story {...item} />,
}));

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
              { index: true, element: <ComponentsIndex /> },
              ...componentRoutes,
            ],
          },
        ],
      },
    ],
  },
]);
