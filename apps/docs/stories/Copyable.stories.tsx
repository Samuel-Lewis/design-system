import React from "react";

import { Copyable as CopyableComponent } from "@samuel-lewis/components";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Copyable",
  component: CopyableComponent,
} as ComponentMeta<typeof CopyableComponent>;

export const Copyable: ComponentStory<typeof CopyableComponent> = () => (
  <CopyableComponent value="Monkey!">Monkey!</CopyableComponent>
);
