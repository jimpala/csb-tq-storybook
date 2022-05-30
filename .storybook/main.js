const path = require("path");
const absPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  staticDirs: ['../public'],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  features: {
    // Note that this means stories MUST have a `title` prop.
    storyStoreV7: true,
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": absPath("node_modules/@emotion/react"),
          "emotion-theming": absPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
