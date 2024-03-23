"use client";

import {
  useMantineColorScheme,
  Switch,
  useComputedColorScheme,
  rem,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  const sunIcon = (
    <IconSun style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
  );

  const moonIcon = (
    <IconMoonStars style={{ width: rem(16), height: rem(16) }} stroke={2.5} />
  );

  return (
    <Switch
      size="lg"
      color="dark.4"
      onLabel={sunIcon}
      offLabel={moonIcon}
      checked={computedColorScheme === "dark"}
      onChange={() => {
        setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
      }}
    />
  );
}
