import {renderWithProviders} from "/src/utils/test-utils";
import SearchModal from "/src/components/ModalWindows/SearchModal/SearchModal";
import {fireEvent} from "@testing-library/react";

describe("SearchModal",()=>{
  it("should renders without errors",()=>{
    const {component:{getByTestId}} = renderWithProviders(<SearchModal closeCallback={jest.fn}/>);
    const searchModal = getByTestId("search-modal");
    window.open = jest.fn();
    expect(searchModal).toBeInTheDocument();
    fireEvent.keyDown(searchModal,{key:"Enter"});
    expect(window.open).toHaveBeenCalledWith(`https://www.ivi.ru/?ivi_search=`)
  });
})