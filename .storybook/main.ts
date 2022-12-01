const { mergeConfig } = require("vite");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const linaria = require("@linaria/rollup");

module.exports = {
  stories: ["../src/components/**/stories.@(tsx|jsx|ts|js)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        nodeResolve({
          extensions: [".tsx", ".ts"],
        }),
        {
          ...linaria.default({
            include: ["src/**/*.{ts,tsx}"],
            babelOptions: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: 3,
                  },
                ],
                "@babel/preset-typescript",
                "@babel/preset-react",
              ],
            },
          }),
        },
      ],
    });
  },
};
