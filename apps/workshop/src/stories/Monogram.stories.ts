import { Monogram } from "@samuel-lewis/components/src/Monogram";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Monogram,
} satisfies Meta<typeof Monogram>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HiddenName: Story = {
  args: {
    hideName: true,
  },
};
