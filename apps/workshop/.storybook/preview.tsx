import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@samuel-lewis/components";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "centered",
    docs: {
      source: {
        state: "open",
      },
    },
  },

  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
