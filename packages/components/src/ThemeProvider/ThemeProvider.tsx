import React from "react";

import {
  MantineProvider,
  MantineProviderProps,
  MantineThemeOverride,
  mergeThemeOverrides,
} from "@mantine/core";

import { defaultTheme } from "./theme";

export interface ThemeProviderProps extends MantineProviderProps {
  /**
   * Combines with default theme. Use `createTheme` from mantine/core.
   */
  themeOverride?: MantineThemeOverride;
}

export function ThemeProvider({
  children,
  themeOverride,
  ...rest
}: ThemeProviderProps): React.ReactElement {
  return (
    <MantineProvider
      classNamesPrefix="sl"
      defaultColorScheme="dark"
      theme={mergeThemeOverrides(defaultTheme, themeOverride ?? {})}
      {...rest}
    >
      {children}
    </MantineProvider>
  );
}
