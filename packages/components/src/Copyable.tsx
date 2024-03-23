"use client";

import React from "react";

import { ActionIcon, CopyButton, Group, Paper, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

export interface CopyableProps {
  /**
   * The value to be copied to clipboard.
   */
  value: string;
  /**
   * Label content
   */
  label: React.ReactNode;
  /**
   * The label to be displayed on the copy button.
   */
  tooltipCopyLabel?: string;
  /**
   * The label to be displayed when the value is copied.
   */
  tooltipCopySuccessLabel?: string;
}

/**
 * Copyable is an extension of Mantine's copyable, which adds user context, tooltips and customisable messages.
 */
export function Copyable({
  value,
  label,
  tooltipCopyLabel = "Copy",
  tooltipCopySuccessLabel = "Copied 🎉",
}: CopyableProps) {
  if (value === "") {
    return <>{label}</>;
  }

  return (
    <Paper shadow="sm" p="xs" radius="md" withBorder>
      <Group gap="sm">
        {label}
        <CopyButton value={value} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip
              label={copied ? tooltipCopySuccessLabel : tooltipCopyLabel}
            >
              <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>
    </Paper>
  );
}
