import React from "react";

import { Copyable, DebugPanel, ThemeToggle } from "@samuel-lewis/components";
import { toSlug } from "@samuel-lewis/utils";

const registerComponent = <T extends React.ComponentType<any>>(
  component: T,
  defaultProps?: React.ComponentProps<T>
) => {
  const name = component.displayName || component.name || "Unknown";
  const path = `/components/${toSlug(name, { useCamel: true })}`;
  const label = name.replace(/([A-Z])/g, " $1").trim();

  return {
    absolutePath: path,
    label,
    component,
    defaultProps,
    defaultElement: React.createElement(component, defaultProps),
  };
};

export const registry = [
  registerComponent(Copyable, {
    value: "Hello World",
    children: "Hello World",
    copyLabel: "Copy",
    copiedLabel: "Copied",
  }),
  registerComponent(ThemeToggle),
  registerComponent(DebugPanel, {
    children: "It's some content",
    title: "Fetching Error",
    isError: false,
    debugMode: true,
  }),
];
