import { Outlet } from "react-router-dom";

import { AppShell, Group, Header, Title } from "@mantine/core";
import { ThemeProvider, ThemeToggle } from "@samuel-lewis/components";

import { NavigationBar } from "./components/NavigationBar";

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
        navbar={<NavigationBar />}
      >
        <Outlet />
      </AppShell>
    </ThemeProvider>
  );
};
