import {renderWithProviders} from "/src/utils/test-utils";
import Layout from "/src/components/Layout/Layout";
import {screen} from "@testing-library/react";
import axios from "axios";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("src/api/user");

describe("Layout",()=>{
  it("should renders without errors",()=>{
    renderWithProviders(<Layout title={'test'}><h1>text</h1></Layout>);
    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });
  // it("a",()=>{
  //   const authSpy =jest.spyOn(userApi,"isUserAuthorized");
  //   const refreshSpy = jest.spyOn(userApi,"refreshAccessToken");
  //   (isUserAuthorized as jest.Mock).mockResolvedValue(true);
  //   (refreshAccessToken as jest.Mock).mockResolvedValue({email:"test",accessToken:"token"});
  //   (getUserByEmail as jest.Mock).mockResolvedValue({ id: 1, name: "John Doe", email:"test",roles:{value:"str"} })
  //   act(()=>
  //     renderWithProviders(<Layout title={'test'}><h1>text</h1></Layout>)
  //
  //   )
  //   expect(authSpy).toHaveBeenCalled();
  //   expect(refreshSpy).toHaveBeenCalled();
  //
  // })
})