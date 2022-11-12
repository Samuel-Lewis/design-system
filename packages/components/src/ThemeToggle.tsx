import React from "react";

import { Switch, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export interface ThemeToggleProps {
  label?: string;
}

export const ThemeToggle: React.FC = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Switch
      size="md"
      color={colorScheme === "dark" ? "gray" : "dark"}
      checked={colorScheme === "light"}
      onChange={() => {
        toggleColorScheme();
      }}
      onLabel={
        <IconSun size={16} stroke={2.5} color={theme.colors.yellow[4]} />
      }
      offLabel={
        <IconMoonStars size={16} stroke={2.5} color={theme.colors.blue[6]} />
      }
    />
  );
};

ThemeToggle.displayName = "ThemeToggle";
