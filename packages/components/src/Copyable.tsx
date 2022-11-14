import React from "react";

import { ActionIcon, CopyButton, Group, Tooltip } from "@mantine/core";
import { IconCopy } from "@tabler/icons";

export interface CopyableProps {
  value: string;
  children: React.ReactNode;
  copyLabel?: string;
  copiedLabel?: string;
}

export const Copyable: React.FC<CopyableProps> = ({
  value,
  children,
  copyLabel = "Copy",
  copiedLabel = "Copied",
}) => {
  if (value === "") {
    return <>{children}</>;
  }

  return (
    <Group spacing="xs">
      <CopyButton value={value}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? copiedLabel : copyLabel}>
            <ActionIcon onClick={copy}>
              <IconCopy size={16} />
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>

      {children}
    </Group>
  );
};

Copyable.displayName = "Copyable";
