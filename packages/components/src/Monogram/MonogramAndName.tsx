import { Group, Text } from "@mantine/core";

// import classes from "./MonogramAndName.module.css";

import { Monogram } from ".";

export function MonogramAndName(): JSX.Element {
  return (
    <Group>
      <Monogram />
      {/* TODO: This should use an imported/embedded font, not relying on end consumer */}
      <Text style={{ fontFamily: "monofonto" }}>Samuel Lewis</Text>
    </Group>
  );
}
