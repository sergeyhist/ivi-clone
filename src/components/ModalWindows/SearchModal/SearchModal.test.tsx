import { renderWithProviders } from "/src/utils/test-utils";
import SearchModal from "/src/components/ModalWindows/SearchModal/SearchModal";
import { fireEvent } from "@testing-library/react";

describe("SearchModal", () => {
  it("should renders without errors", () => {
    const closeCallback = jest.fn();
    const {
      component: { getByTestId },
    } = renderWithProviders(<SearchModal closeCallback={closeCallback} />);
    const searchModal = getByTestId("search-modal");
    window.open = jest.fn();
    expect(searchModal).toBeInTheDocument();
    fireEvent.keyDown(searchModal, { key: "Enter" });
    expect(window.open).toHaveBeenCalledWith(`https://www.ivi.ru/?ivi_search=`);
    fireEvent.keyDown(searchModal, { key: "Escape" });
    expect(closeCallback).toHaveBeenCalled();
  });
});