import React from "react";

import {
  Stack,
  Switch,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export interface ThemeToggleProps {}

export const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Stack>
      <Switch
        size="md"
        color="gray.6"
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
    </Stack>
  );
};

ThemeToggle.displayName = "ThemeToggle";
