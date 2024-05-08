/** @type {import('prettier').Options & import("@trivago/prettier-plugin-sort-imports").PluginConfig}*/
module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  // Prettier base config
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  // Import sort config
  importOrder: ["^@/(.*)$", "^@(.*)$", "^@refine/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
};
