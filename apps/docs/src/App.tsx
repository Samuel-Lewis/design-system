import React from "react";
import { Outlet } from "react-router-dom";

import { AppShell, Group, Header, Navbar, Title } from "@mantine/core";
import { ThemeProvider, ThemeToggle } from "@samuel-lewis/components";

export const App = () => {
  return (
    <ThemeProvider>
      <AppShell
        fixed
        padding="md"
        header={
          <Header height={60} p="xs">
            <Group position="apart">
              <Title order={2}>Docs</Title>
              <ThemeToggle />
            </Group>
          </Header>
        }
        navbar={
          <Navbar width={{ base: 300 }} p="xs">
            {/* Navbar content */}
            hello there
          </Navbar>
        }
      >
        <Outlet />
      </AppShell>
    </ThemeProvider>
  );
};
