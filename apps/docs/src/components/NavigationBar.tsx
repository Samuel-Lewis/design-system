import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Navbar, NavLink } from "@mantine/core";
import { IconComponents } from "@tabler/icons";

import { registry } from "../registry";

export interface NavigationBarProps {}

export const NavigationBar: React.FC<NavigationBarProps> = () => {
  let location = useLocation();

  const items = registry.map((item) => (
    <NavLink
      key={item.absolutePath}
      label={item.label}
      component={Link}
      to={item.absolutePath}
      active={location.pathname === item.absolutePath}
      variant="filled"
    />
  ));

  return (
    <Navbar width={{ base: 300 }} p="xs">
      <NavLink
        label="Components"
        icon={<IconComponents size={16} stroke={1.5} />}
        active={location.pathname.startsWith("/components")}
        defaultOpened={location.pathname.startsWith("/components")}
        variant={location.pathname === "/components" ? "filled" : undefined}
      >
        {items}
      </NavLink>
    </Navbar>
  );
};
