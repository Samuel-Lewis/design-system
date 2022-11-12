import React from "react";

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";

import { defaultTheme } from "./theme";

export interface ThemeProviderProps {
  children: React.ReactNode;
  themeOverride?: MantineThemeOverride;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  themeOverride,
}) => {
  const systemColorScheme = useColorScheme();
  // TODO: Use a cookie instead?
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: systemColorScheme ?? "dark",
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    const next = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(next);
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withCSSVariables
        withGlobalStyles
        withNormalizeCSS
        theme={{ ...defaultTheme, ...themeOverride }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

ThemeProvider.displayName = "ThemeProvider";
