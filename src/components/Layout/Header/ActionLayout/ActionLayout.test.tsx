import {act, fireEvent, render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "/src/store";
import ActionLayout from "/src/components/Layout/Header/ActionLayout/ActionLayout";
import mockRouter from 'next-router-mock';
import {useRouter} from "next/router";
import {userEvent} from "@storybook/testing-library";

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
  // test("calls router.push with the correct arguments", () => {
  //   const useRouter = jest.spyOn(require("next/router"), "useRouter");
  //   const pushMock = jest.fn();
  //   useRouter.mockImplementation(() => ({
  //     route: '/',
  //     pathname: '',
  //     query: '',
  //     asPath: '',
  //     push: pushMock,
  //     events: {
  //       on: jest.fn(),
  //       off: jest.fn()
  //     },
  //     beforePopState: jest.fn(() => null),
  //     prefetch: jest.fn(() => null)
  //   }));
  //   render(
  //     <Provider store={store}>
  //       <ActionLayout setIsDropdownActive={setIsDropdownActive} setDropDownType={setDropDownType}/>
  //     </Provider>
  //   )
  //   const toggleSwitch = screen.getByTestId("toggle-switch");
  //   act(()=>fireEvent.click(toggleSwitch))
  //
  //   expect(pushMock).toHaveBeenCalled();
  // });
});
