import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "/src/store";
import ActionLayout from "/src/components/Layout/Header/ActionLayout/ActionLayout";

const setDropDownType = jest.fn();
const setIsDropdownActive = jest.fn();

jest.mock("next/router", () => require("next-router-mock"));

describe("ActionLayout", () => {
  test("should renders without errors", () => {
    render(
      <Provider store={store}>
        <ActionLayout
          setIsDropdownActive={setIsDropdownActive}
          setDropDownType={setDropDownType}
        />
      </Provider>
    );
    expect(screen.getByTestId("actionLayout-container")).toBeInTheDocument();
  });
  // test("calls router.push with the correct arguments",()=>{
  //   const mockPush = jest.fn();
  //   const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  //
  //   useRouter.mockImplementation(() => ({
  //     locale: 'en',
  //     push: mockPush,
  //     asPath: '/',
  //   }));
  //
  //   render(
  //     <Provider store={store}>
  //         <ActionLayout setIsDropdownActive={setIsDropdownActive} setDropDownType={setDropDownType}/>
  //     </Provider>
  //   )
  //   const toggleSwitch = screen.getByTestId("toggle-switch");
  //   fireEvent.click(toggleSwitch);
  //   expect(mockPush).toHaveBeenCalledWith("/");
});
