import { Copyable } from "@samuel-lewis/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Copyable,
} satisfies Meta<typeof Copyable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "1234",
    children: "Your secret code is: 1234",
  },
};

export const NoCopyValue: Story = {
  args: {
    value: "",
    children: "Your secret code is: 1234",
  },
};
