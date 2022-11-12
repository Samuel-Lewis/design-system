import { ActionIcon, CopyButton, Group, Tooltip } from "@mantine/core";
import { IconCopy } from "@tabler/icons";

export interface CopyableProps {
  value: string;
  children: React.ReactNode;
  labels?: {
    copy?: string;
    copied?: string;
  };
}

export const Copyable: React.FC<CopyableProps> = ({
  value,
  children,
  labels,
}) => {
  if (value === "") {
    return <>{children}</>;
  }

  const copiedLabel = labels?.copied || "Copied";
  const copyLabel = labels?.copy || "Copy";

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
