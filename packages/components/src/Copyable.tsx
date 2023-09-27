import React from "react";

import { ActionIcon, CopyButton, Group, Paper, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

export interface CopyableProps {
  value: string;
  children: React.ReactNode;
  copyLabel?: string;
  copiedLabel?: string;
}

/**
 * Copyable is an extension of Mantine's copyable, which adds user context, tooltips and customisable messages.
 */
export const Copyable: React.FC<CopyableProps> = ({
  value,
  children,
  copyLabel = "Copy",
  copiedLabel = "Copied 🎉",
}) => {
  if (value === "") {
    return <>{children}</>;
  }

  return (
    <Paper shadow="sm" p="xs" radius="md" withBorder>
      <Group spacing="sm">
        {children}
        <CopyButton value={value} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? copiedLabel : copyLabel}>
              <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>
    </Paper>
  );
};

Copyable.displayName = "Copyable";
