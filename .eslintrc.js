module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-samuel-lewis`
  extends: ["samuel-lewis"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
