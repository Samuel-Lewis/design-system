import { Shell } from "@samuel-lewis/components";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Shell,
} satisfies Meta<typeof Shell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        {...Array.from({ length: 5 }, (_, i) => <p key={i}>Hello there</p>)}
      </div>
    ),
  },
};

export const Overflowing: Story = {
  args: {
    children: (
      <div>
        {...Array.from({ length: 100 }, (_, i) => <p key={i}>Hello there</p>)}
      </div>
    ),
  },
};

export const Empty: Story = {
  args: {
    children: undefined,
  },
};
