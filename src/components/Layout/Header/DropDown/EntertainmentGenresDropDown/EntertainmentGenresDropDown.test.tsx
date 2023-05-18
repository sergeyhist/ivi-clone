import { screen } from "@testing-library/react";
import EntertainmentGenresDropDown from "/src/components/Layout/Header/DropDown/EntertainmentGenresDropDown/EntertainmentGenresDropDown";
import { renderWithProviders } from "/src/utils/test-utils";

describe("EntertainmentGenresDropDown", () => {
  it("should render without errors", () => {
    renderWithProviders(
      <EntertainmentGenresDropDown selectedGenre={"movies"} />
    );
    expect(screen.getByTestId("ent-dropdown")).toBeInTheDocument();
  });
});