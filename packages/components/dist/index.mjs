// src/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsx("button", {
    children: props.children
  });
}
Button.displayName = "Button";

// src/Copyable.tsx
import { ActionIcon, CopyButton, Group, Tooltip } from "@mantine/core";
import { IconCopy } from "@tabler/icons";
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
var Copyable = ({
  value,
  children,
  labels
}) => {
  if (value === "") {
    return /* @__PURE__ */ jsx2(Fragment, {
      children
    });
  }
  const copiedLabel = (labels == null ? void 0 : labels.copied) || "Copied";
  const copyLabel = (labels == null ? void 0 : labels.copy) || "Copy";
  return /* @__PURE__ */ jsxs(Group, {
    spacing: "xs",
    children: [
      /* @__PURE__ */ jsx2(CopyButton, {
        value,
        children: ({ copied, copy }) => /* @__PURE__ */ jsx2(Tooltip, {
          label: copied ? copiedLabel : copyLabel,
          children: /* @__PURE__ */ jsx2(ActionIcon, {
            onClick: copy,
            children: /* @__PURE__ */ jsx2(IconCopy, {
              size: 16
            })
          })
        })
      }),
      children
    ]
  });
};

// src/ThemeProvider/theme.ts
var defaultTheme = {
  colorScheme: "dark"
};

// src/ThemeProvider/ThemeProvider.tsx
import {
  ColorSchemeProvider,
  MantineProvider
} from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";
import { jsx as jsx3 } from "react/jsx-runtime";
var ThemeProvider = ({
  children,
  themeOverride
}) => {
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: systemColorScheme != null ? systemColorScheme : "dark"
  });
  const toggleColorScheme = (value) => {
    const next = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(next);
  };
  return /* @__PURE__ */ jsx3(ColorSchemeProvider, {
    colorScheme,
    toggleColorScheme,
    children: /* @__PURE__ */ jsx3(MantineProvider, {
      withCSSVariables: true,
      withGlobalStyles: true,
      withNormalizeCSS: true,
      theme: { ...defaultTheme, ...themeOverride },
      children
    })
  });
};
export {
  Button,
  Copyable,
  ThemeProvider,
  defaultTheme
};
