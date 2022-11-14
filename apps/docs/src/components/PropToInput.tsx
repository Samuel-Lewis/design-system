import React from "react";

import { Checkbox, NumberInput, TextInput } from "@mantine/core";

export interface PropToInputProps {
  label: string;
  placeholder: any;
  formValues: any;
  type: string;
}

export const PropToInput: React.FC<PropToInputProps> = ({
  type,
  formValues,
  ...rest
}) => {
  const pieces = { ...formValues, ...rest, description: type };

  switch (type) {
    case "boolean":
      return <Checkbox {...pieces} />;
    case "string":
      return <TextInput {...pieces} />;
    case "number":
      return <NumberInput {...pieces} />;
    default:
      return null;
  }
};
