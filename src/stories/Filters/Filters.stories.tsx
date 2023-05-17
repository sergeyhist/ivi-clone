import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import Filters from "/src/components/Catalog/Filters/Filters";
import { useAppDispatch } from "/src/hooks/redux";
import { setSlugs } from "/src/store/slices/slugsSlice";
import { genresListSlugs } from "/src/utils/mocks/genres";
import { countriesListSlugs } from "/src/utils/mocks/countries";

const meta: Meta<typeof Filters> = {
  title: "Filters/Filters Block",
  parameters: {
    nextjs: {
      router: {
        pathname: "/movies",
        query: {
          genres: ["melodrama", "anime", "horror"],
          countries: ["japan", "usa"],
          year: "2023-2023",
        },
      },
    },
  },
  decorators: [
    (Story) => {
      const dispatch = useAppDispatch();

      dispatch(
        setSlugs({
          genresSlugs: genresListSlugs,
          countriesSlugs: countriesListSlugs,
        })
      );

      return (
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            marginInline: "auto",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  component: Filters,
};

export default meta;
type Story = StoryObj<typeof Filters>;

export const FiltersBlock: Story = {};
