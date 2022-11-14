import React from "react";

import { Group, Stack, Title } from "@mantine/core";
import { useForm } from "@mantine/form";

import { DemoCard } from "../components";
import { PropToInput } from "../components/PropToInput";

export interface StoryProps<T extends React.ComponentType<any>> {
  component: T;
  label: string;
  absolutePath: string;
  defaultProps?: React.ComponentProps<T>;
}

export const Story = <T extends React.ComponentType<any>>({
  component,
  defaultProps,
  absolutePath,
  label,
}: StoryProps<T>) => {
  const form = useForm({
    initialValues: defaultProps,
  });

  const formParts = Object.entries(defaultProps ?? {}).map(([key, value]) => (
    <PropToInput
      key={key}
      label={key}
      placeholder={value}
      type={typeof value}
      formValues={form.getInputProps(key)}
    />
  ));

  return (
    <>
      <h2>{component.displayName}</h2>
      <Group grow position="center" align="start">
        <Stack>
          <Title order={3}>Example</Title>
          <DemoCard path={absolutePath} label={label}>
            {React.createElement(component, { ...form.values })}
          </DemoCard>
        </Stack>
        {defaultProps && (
          <form>
            <Title order={3}>Props</Title>
            <Stack>{formParts}</Stack>
          </form>
        )}
      </Group>
    </>
  );
};
