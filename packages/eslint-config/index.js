module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "next",
    "turbo",
    "prettier",
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
    "@next/next/no-html-link-for-pages": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",
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
