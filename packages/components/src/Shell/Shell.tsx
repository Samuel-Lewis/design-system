import React from "react";

import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Box,
  Group,
} from "@mantine/core";

import { Monogram } from "../Monogram";
import { ThemeProvider, ThemeProviderProps } from "../ThemeProvider";
import { ThemeToggle } from "../ThemeToggle";

export type BarProps = {
  /**
   * Left side component, to be used as a whole logo. Defautls to Monogram with name.
   */
  logo?: React.ReactNode;
  /**
   * Middle content of the bar. Is not centered.
   */
  content?: React.ReactNode;
  /**
   * Whether the component is enabled, default true.
   */
  enabled?: boolean;
};

export interface ShellProps {
  /**
   * Content to go in the main body.
   */
  children: React.ReactNode;
  /**
   * Props for the ThemeProvider component
   */
  providerProps?: ThemeProviderProps;
  /**
   * Header configuration
   */
  header?: BarProps;
  /**
   * Footer configuration
   */
  footer?: BarProps;
}

export function Shell({
  children,
  providerProps,
  header: {
    logo: headerLogo = <Monogram />,
    content: headerContent,
    enabled: headerEnabled = true,
  } = {},
  footer: {
    logo: footerLogo = <Monogram />,
    content: footerContent,
    enabled: footerEnabled = true,
  } = {},
}: ShellProps): JSX.Element {
  return (
    <ThemeProvider {...providerProps}>
      <AppShell header={{ height: 60, collapsed: !headerEnabled }}>
        <AppShellHeader mx="xl" py="md">
          <Group justify="space-between">
            {headerLogo}
            {headerContent}
            <ThemeToggle />
          </Group>
        </AppShellHeader>
        <AppShellMain px="xl" mih="calc(100vh - 92px)">
          {children}
        </AppShellMain>
        {footerEnabled && (
          <Box
            mx="md"
            py="md"
            component="footer"
            style={{
              height: 60,
              borderTop:
                "calc(0.0625rem * var(--mantine-scale)) solid var(--app-shell-border-color)",
            }}
          >
            {footerLogo}
            {footerContent}
          </Box>
        )}
      </AppShell>
    </ThemeProvider>
  );
}
