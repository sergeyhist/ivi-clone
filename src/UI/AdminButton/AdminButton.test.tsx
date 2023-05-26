import {renderWithProviders} from "/src/utils/test-utils";
import AdminButton from "/src/UI/AdminButton/AdminButton";
import {act} from "@testing-library/react";
import {setRole} from "/src/store/slices/authSlice";

jest.mock("next/router", () => require("next-router-mock"));

describe("AdminButton",()=>{
  it("should renders without errors",()=>{
    const {component: {getByTestId}, store }= renderWithProviders(<AdminButton/>);
    act(()=>store.dispatch(setRole("admin")));
    expect(getByTestId("admin-button")).toBeInTheDocument();
  });
  it("should do not render if user role is not admin",()=>{
    const {component: {getByTestId},store }= renderWithProviders(<AdminButton/>);
    act(()=>store.dispatch(setRole("admin")));
    const adminButton = getByTestId("admin-button");
    expect(adminButton).toBeInTheDocument();
    act(()=>store.dispatch(setRole("")));
    expect(adminButton).not.toBeInTheDocument();
  })
})