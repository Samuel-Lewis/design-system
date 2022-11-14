import React from "react";
import { Link } from "react-router-dom";

import { Card, Center, createStyles, Group, Text } from "@mantine/core";

export interface DemoCardProps {
  children: React.ReactNode;
  label: string;
  path: string;
  showMeta?: boolean;
}

const useStyle = createStyles(
  (theme, { showMeta }: { showMeta?: boolean }) => ({
    card: {
      background:
        theme.colorScheme === "light"
          ? theme.colors.gray[1]
          : theme.colors.dark[4],
      ":hover": {
        transform: showMeta ? "translateY(-2px)" : "",
      },
      transition: "transform 0.2s ease",
    },

    focus: {
      height: 150,
    },

    label: {
      background:
        theme.colorScheme === "light"
          ? theme.colors.gray[2]
          : theme.colors.dark[5],
    },
  })
);

export const DemoCard: React.FC<DemoCardProps> = ({
  children,
  showMeta = false,
  path,
  label,
}) => {
  const { classes } = useStyle({ showMeta });
  let linkProps = {};
  if (showMeta) {
    linkProps = {
      component: Link,
      to: path,
    };
  }

  return (
    <Card
      shadow="md"
      p="lg"
      radius="md"
      className={classes.card}
      {...linkProps}
    >
      <Center className={classes.focus}>{children}</Center>
      {showMeta && (
        <Card.Section inheritPadding py="xs" className={classes.label}>
          <Center>
            <Group>
              <Text fw={500}>{label}</Text>
            </Group>
          </Center>
        </Card.Section>
      )}
    </Card>
  );
};
