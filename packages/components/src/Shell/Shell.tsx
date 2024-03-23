import React from "react";

import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Box,
  Group,
} from "@mantine/core";

import { MonogramAndName } from "../Monogram";
import { ThemeProvider, ThemeProviderProps } from "../ThemeProvider";
import { ThemeToggle } from "../ThemeToggle";

export interface ShellProps {
  children: React.ReactNode;
  providerProps?: ThemeProviderProps;
  headerParts?: {
    logo?: React.ReactNode;
    content?: React.ReactNode;
  };
  footerParts?: {
    logo?: React.ReactNode;
    content?: React.ReactNode;
  };
}

export function Shell({
  children,
  providerProps,
  headerParts: { logo: headerLogo, content: headerContent } = {},
  footerParts: { logo: footerLogo, content: footerContent } = {},
}: ShellProps): JSX.Element {
  return (
    <ThemeProvider {...providerProps}>
      <AppShell header={{ height: 60 }}>
        <AppShellHeader mx="xl" py="md">
          <Group justify="space-between">
            {headerLogo ? headerLogo : <MonogramAndName />}
            {headerContent}
            <ThemeToggle />
          </Group>
        </AppShellHeader>
        <AppShellMain px="xl" mih="calc(100vh - 92px)">
          {children}
        </AppShellMain>
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
          {footerLogo ? footerLogo : <MonogramAndName />}
          {footerContent}
        </Box>
      </AppShell>
    </ThemeProvider>
  );
}
