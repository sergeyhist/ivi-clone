import type { Meta, StoryObj } from "@storybook/react";
import "/src/styles/global.sass";
import { useAppDispatch } from "/src/hooks/redux";
import { setSlugs } from "/src/store/slices/slugsSlice";
import { genresListSlugs } from "/src/utils/mocks/genres";
import { countriesListSlugs } from "/src/utils/mocks/countries";
import MultiSelector from "/src/components/Catalog/Filters/MultiSelector/MultiSelector";

const meta: Meta<typeof MultiSelector> = {
  title: "Filters/Multi Selector",
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "Title of the component",
    },
    items: {
      description: "List of avaliable filters",
    },
    filters: {
      description: "List of activated filters",
    },
    filtersType: {
      description:
        "Type of the filter. Uses as a key for translations and query params",
    },
    dropdownPosition: {
      description:
        "Position of the dropdown for screens with width more than 960px",
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
        <div style={{ height: "550px" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              padding: "16px",
              background: "#1f1b2e",
              position: "relative",
              marginInline: "auto",
            }}
          >
            <Story />
          </div>
        </div>
      );
    },
  ],
  component: MultiSelector,
};

export default meta;
type Story = StoryObj<typeof MultiSelector>;

export const GenresFilter: Story = {
  args: {
    title: "genre",
    items: genresListSlugs,
    filters: ["anime", "melodrama"],
    filtersType: "genres",
    dropdownPosition: "left",
  },
};

export const CountriesFilter: Story = {
  args: {
    title: "country",
    items: countriesListSlugs,
    filters: ["usa", "japan"],
    filtersType: "countries",
    dropdownPosition: "center",
  },
};
