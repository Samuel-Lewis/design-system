import React from "react";

export interface StoryProps<T extends React.ComponentType<any>> {
  component: T;
  defaultProps?: React.ComponentProps<T>;
}

export type StoryRoute = {
  path: string;
  label: string;
  element: React.ReactNode;
};
