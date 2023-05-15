import { fireEvent, render, screen } from "@testing-library/react";
import { store } from "/src/store";
import EntertainmentGenresDropDown
  from "/src/components/Layout/Header/DropDown/EntertainmentGenresDropDown/EntertainmentGenresDropDown";
import {Provider} from "react-redux";



describe("EntertainmentGenresDropDown", () => {
  it("should render without errors", () => {
    render(
      <Provider store={store}>
        <EntertainmentGenresDropDown selectedGenre={"movies"} />
      </Provider>
    );
    expect(screen.getByTestId("ent-dropdown")).toBeInTheDocument();
  });

});