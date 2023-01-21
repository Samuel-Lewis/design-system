module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "import",
    "jsx-a11y",
    "prettier",
    "react",
    "react-hooks",
    "@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/newline-after-import": "error",
    "import/no-default-export": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-nodejs-modules": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        pathGroups: [
          {
            pattern: "@*/**",
            group: "external",
            position: "after",
          },
        ],
      },
    ],
  },
};
