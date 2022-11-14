import React from "react";

import { SimpleGrid } from "@mantine/core";

import { DemoCard } from "../components";
import { registry } from "../registry";

export interface ComponentsIndexProps {}

export const ComponentsIndex: React.FC<ComponentsIndexProps> = () => {
  const items = registry.map((item) => (
    <DemoCard
      key={item.absolutePath}
      path={item.absolutePath}
      label={item.label}
      showMeta
    >
      {item.defaultElement}
    </DemoCard>
  ));
  return (
    <>
      <h1>Components</h1>
      <SimpleGrid cols={3}>{items}</SimpleGrid>
    </>
  );
};
