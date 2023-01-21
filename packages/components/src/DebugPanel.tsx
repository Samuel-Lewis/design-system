import React from "react";

import {
  Accordion,
  Text,
  Stack,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import { IconAlertTriangle, IconBackhoe } from "@tabler/icons";

export interface DebugPanelProps {
  children?: React.ReactNode;
  title?: string;
  forceVisible?: boolean;
  debugMode?: boolean;
  isError?: boolean;
}

const useStyle = createStyles(
  (theme, { isError }: Pick<DebugPanelProps, "isError">) => ({
    panel: {
      width: "100%",

      ".mantine-Accordion-item": {
        backgroundColor: isError
          ? theme.fn.rgba(theme.colors.red[9], 0.25)
          : "",
      },
    },
  })
);

export const DebugPanel: React.FC<DebugPanelProps> = ({
  children,
  title = "Debug Information",
  forceVisible = false,
  debugMode = false,
  isError = false,
}) => {
  const theme = useMantineTheme();
  const { classes } = useStyle({ isError });

  const show = debugMode || forceVisible;
  if (!show || !children) {
    return null;
  }

  const icon = isError ? (
    <IconAlertTriangle color={theme.colors.red[7]} />
  ) : (
    <IconBackhoe />
  );

  return (
    <Accordion variant="separated" className={classes.panel}>
      <Accordion.Item value="default">
        <Accordion.Control icon={icon}>{title}</Accordion.Control>
        <Accordion.Panel>
          <Stack>
            {children}
            <Text size="xs" c="dimmed">
              This error panel should only exist in DEBUG modes. If you are
              seeing this in production, please contact support.
            </Text>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
