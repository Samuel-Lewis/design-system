import * as React$1 from "react";
import React__default from "react";
import { MantineThemeOverride } from "@mantine/core";

interface ButtonProps {
  children: React$1.ReactNode;
}
declare function Button(props: ButtonProps): JSX.Element;
declare namespace Button {
  var displayName: string;
}

interface CopyableProps {
  value: string;
  children: React.ReactNode;
  labels?: {
    copy?: string;
    copied?: string;
  };
}
declare const Copyable: React.FC<CopyableProps>;

declare const defaultTheme: MantineThemeOverride;

interface ThemeProviderProps {
  children: React__default.ReactNode;
  themeOverride?: MantineThemeOverride;
}
declare const ThemeProvider: React__default.FC<ThemeProviderProps>;

export {
  Button,
  ButtonProps,
  Copyable,
  CopyableProps,
  ThemeProvider,
  ThemeProviderProps,
  defaultTheme,
};
