"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Copyable: () => Copyable,
  ThemeProvider: () => ThemeProvider,
  defaultTheme: () => defaultTheme
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Button(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    children: props.children
  });
}
Button.displayName = "Button";

// src/Copyable.tsx
var import_core = require("@mantine/core");
var import_icons = require("@tabler/icons");
var import_jsx_runtime = require("react/jsx-runtime");
var Copyable = ({
  value,
  children,
  labels
}) => {
  if (value === "") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children
    });
  }
  const copiedLabel = (labels == null ? void 0 : labels.copied) || "Copied";
  const copyLabel = (labels == null ? void 0 : labels.copy) || "Copy";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Group, {
    spacing: "xs",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.CopyButton, {
        value,
        children: ({ copied, copy }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Tooltip, {
          label: copied ? copiedLabel : copyLabel,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.ActionIcon, {
            onClick: copy,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_icons.IconCopy, {
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
var import_core2 = require("@mantine/core");
var import_hooks = require("@mantine/hooks");
var import_jsx_runtime = require("react/jsx-runtime");
var ThemeProvider = ({
  children,
  themeOverride
}) => {
  const systemColorScheme = (0, import_hooks.useColorScheme)();
  const [colorScheme, setColorScheme] = (0, import_hooks.useLocalStorage)({
    key: "mantine-color-scheme",
    defaultValue: systemColorScheme != null ? systemColorScheme : "dark"
  });
  const toggleColorScheme = (value) => {
    const next = value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(next);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.ColorSchemeProvider, {
    colorScheme,
    toggleColorScheme,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core2.MantineProvider, {
      withCSSVariables: true,
      withGlobalStyles: true,
      withNormalizeCSS: true,
      theme: { ...defaultTheme, ...themeOverride },
      children
    })
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Copyable,
  ThemeProvider,
  defaultTheme
});
