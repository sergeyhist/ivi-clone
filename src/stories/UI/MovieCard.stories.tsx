import type { Meta, StoryObj } from "@storybook/react";
import MovieCard from "/src/UI/MovieCard/MovieCard";
import "/src/styles/_config.sass";
import "/src/styles/global.sass";
import "/src/styles/_vars.sass";

const meta: Meta<typeof MovieCard> = {
  title: "UI/MovieCard",
  decorators: [
    (Story) => (
      <div style={{ width: "10000px" }}>
        <div style={{ width: "200px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  component: MovieCard,
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const FirstStory: Story = {
  args: {
    content: {
      id: 1,
      imgUrl:
        "https://imagecache.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6662d631-f055-4616-26d3-fb8c4bc9b900/width=1200/6662d631-f055-4616-26d3-fb8c4bc9b900.jpeg",
      route: "/",
      rating: "8",
      ratingBars: [90, 77, 40, 50],
      chartRating: 40,
      chartName: "сюжет",
      info: "2016, США, Для детелй",
      infoTime: "90 минут",
      title: "Тень за спиной",
      type: 1,
    },
    type: "default",
  },
};
