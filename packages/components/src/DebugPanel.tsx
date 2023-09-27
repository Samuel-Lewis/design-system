import React from "react";

import {
  Accordion,
  Text,
  Stack,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import { IconAlertTriangle, IconBackhoe } from "@tabler/icons-react";

export interface DebugPanelProps {
  children?: React.ReactNode;
  title?: string;
  debugMode?: boolean;
  isError?: boolean;
}

const useStyle = createStyles(
  (theme, { isError }: Pick<DebugPanelProps, "isError">) => ({
    panel: {
      ".mantine-Accordion-item": {
        backgroundColor: isError
          ? theme.fn.rgba(theme.colors.red[9], 0.25)
          : "",
      },
    },
  })
);

const isDevelopment =
  process.env.NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_NODE_ENV === "development" ||
  process.env.VERCEL_ENV === "development" ||
  process.env.DEBUG === "true";

export const DebugPanel: React.FC<DebugPanelProps> = ({
  children,
  title = "Debug Information",
  debugMode = isDevelopment,
  isError = false,
}) => {
  const theme = useMantineTheme();
  const { classes } = useStyle({ isError });

  if (!debugMode || !children) {
    return null;
  }

  const icon = isError ? (
    <IconAlertTriangle color={theme.colors.red[7]} />
  ) : (
    <IconBackhoe />
  );

  return (
    <Accordion m="xs" variant="separated" className={classes.panel}>
      <Accordion.Item value="default">
        <Accordion.Control icon={icon}>{title}</Accordion.Control>
        <Accordion.Panel>
          <Stack>
            {children}
            <Text size="xs" c="dimmed">
              This error panel should only exist in DEBUG modes. If you are
              seeing this in production, please contact support.
              <br />
              isDevelopment: {isDevelopment.toString()}
            </Text>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

DebugPanel.displayName = "DebugPanel";
