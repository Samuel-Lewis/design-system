import React from "react";

import { ThemeToggle as ThemeToggleComponent } from "@samuel-lewis/components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/ThemeToggle",
  component: ThemeToggleComponent,
} as ComponentMeta<typeof ThemeToggleComponent>;

export const ThemeToggle: ComponentStory<typeof ThemeToggleComponent> = () => (
  <ThemeToggleComponent />
);
