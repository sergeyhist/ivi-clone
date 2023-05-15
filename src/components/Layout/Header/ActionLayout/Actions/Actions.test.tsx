import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "/src/store";
import Actions from "/src/components/Layout/Header/ActionLayout/Actions/Actions";
import {setWindowSize} from "/src/store/slices/windowSizeSlice";
import {setAuth} from "/src/store/slices/authSlice";

jest.mock("next/router", () => require("next-router-mock"));
store.dispatch(setWindowSize({width: 1960,height:1200}));

describe("Actions", () => {
  test("renders without errors", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Actions
          setDropDownType={() => {
            return "movie";
          }}
          setIsDropdownActive={() => false}
        />
      </Provider>
    );

    expect(getByTestId("actions-container")).toBeInTheDocument();
  });
  test("should render search button when windowSizeWidth is greater than 1159",()=>{
    const {getByTestId} = render(
      <Provider store={store}>
        <Actions
          setDropDownType={() => {
            return "movie";
          }}
          setIsDropdownActive={() => false}
        />
      </Provider>
    );

    expect(getByTestId("search-link")).toBeInTheDocument();
  })

  test("should change showSearchModal store state to true", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Actions
          setDropDownType={() => {
            return "movie";
          }}
          setIsDropdownActive={() => false}
        />
      </Provider>
    );
    const searchLink = getByTestId("search-link");
    fireEvent.click(searchLink);


    expect(store.getState().showModal.showSearchModal).toBeTruthy();
  });

  test("should render logout button when authState.isLogged is true",()=>{
    store.dispatch(setAuth({isLogged:true,userEmail:"email"}));

    const { getByTestId } = render(
      <Provider store={store}>
        <Actions
          setDropDownType={() => {
            return "movie";
          }}
          setIsDropdownActive={() => false}
        />
      </Provider>
    );
    expect(getByTestId("logout-button")).toBeInTheDocument();
  })

  test("should change setAuth store state to false",()=>{
    store.dispatch(setAuth({isLogged:true,userEmail:"email"}));

    const { getByTestId } = render(
      <Provider store={store}>
        <Actions
          setDropDownType={() => {
            return "profile";
          }}
          setIsDropdownActive={() => true}
        />
      </Provider>
    );
    fireEvent.click(getByTestId("logout-button"));
    console.log(store.getState().auth);
    expect(store.getState().auth.isLogged).toBeFalsy();
  })
});