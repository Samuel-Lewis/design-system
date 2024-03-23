import { DebugPanel } from "@samuel-lewis/components/src/DebugPanel";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: DebugPanel,
} satisfies Meta<typeof DebugPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Ship Status",
    isError: false,
    children: "All systems normal",
  },
};

export const Error: Story = {
  args: {
    title: "Ship Status",
    isError: true,
    children: "Engines are down! Ship is going down!",
  },
};
