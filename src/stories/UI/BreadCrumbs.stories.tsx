import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import BreadCrumbs from "/src/UI/BreadCrumbs/BreadCrumbs";

const meta: Meta<typeof BreadCrumbs> = {
  title: "UI/BreadCrumbs",
  tags: ["autodocs"],
  argTypes: {
    customRoutes: {
      description:
        "(optional): if you need to apply any other routes different from the routes in the Router.pathname",
    },
    type: {
      description: "(optional): type of breadcrumbs displayed, by default: default",
    },
    currentTitle: {
      description:
        "(optional): if you need to display the title of the current page, without a link",
    },
    mobileVersion: {
      description:
        "(optional): if true, then with a screen width of less than 600px, only back button will be displayed",
    },
  },
  component: BreadCrumbs,
};

export default meta;
type Story = StoryObj<typeof BreadCrumbs>;

export const DefaultBreadCrumbs: Story = {
  args: {
    customRoutes: ["/", "/movies/"],
    currentTitle: "CurrentTitle",
  },
};

export const SlashBreadCrumbs: Story = {
  args: {
    customRoutes: ["/", "/movies/"],
    type: "slash",
    currentTitle: "CurrentTitle",
  },
};
