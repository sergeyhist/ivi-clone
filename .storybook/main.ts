import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [
    {
      from: "../public/",
      to: "/",
    },
    {
      from: "../src/assets/fonts",
      to: "src/assets/fonts",
    },
  ],
  webpackFinal: async (config) => {
    if (config.resolve?.fallback)
      config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    return config;
  },
};
export default config;
