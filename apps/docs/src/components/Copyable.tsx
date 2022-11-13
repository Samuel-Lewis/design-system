import React from "react";

import { Copyable as CopyableComponent } from "@samuel-lewis/components";

export type CopyableProps = {};

export const Copyable: React.FC<CopyableProps> = () => {
  return (
    <div>
      <h1>Copyable</h1>
      any?
      {JSON.stringify(CopyableComponent.propTypes, null, 2)}
      {JSON.stringify(CopyableComponent.defaultProps, null, 2)}
    </div>
  );
};
