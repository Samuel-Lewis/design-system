import React from "react";

import { Copyable, ThemeToggle } from "@samuel-lewis/components";
import { camelToSlug } from "@samuel-lewis/utils";

const registerComponent = <T extends React.ComponentType<any>>(
  component: T,
  defaultProps?: React.ComponentProps<T>
) => {
  const name = component.displayName || component.name || "Unknown";
  const path = `/components/${camelToSlug(name)}`;
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
];
