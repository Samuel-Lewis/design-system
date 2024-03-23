import { ThemeToggle } from "@samuel-lewis/components/src/ThemeToggle";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: ThemeToggle,
} satisfies Meta<typeof ThemeToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
