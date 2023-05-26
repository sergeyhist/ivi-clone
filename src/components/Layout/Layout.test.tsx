import { renderWithProviders } from "/src/utils/test-utils";
import Layout from "/src/components/Layout/Layout";
import { act, waitFor } from "@testing-library/react";
import * as userApi from "/src/api/user";

import { IProviderRender } from "/src/types/IRender";
import {
  getUserByEmail,
  isUserAuthorized,
  refreshAccessToken,
} from "/src/api/user";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("axios");
jest.mock("src/api/user");
jest.useFakeTimers();

describe("Layout", () => {
  let store: IProviderRender;
  it("should set a proper value to store", async () => {
    const authSpy = jest.spyOn(userApi, "isUserAuthorized");
    const refreshSpy = jest.spyOn(userApi, "refreshAccessToken");
    const getUserByEmail = jest.spyOn(userApi, "getUserByEmail");
    authSpy.mockResolvedValue(true);
    refreshSpy.mockResolvedValue({ email: "test", accessToken: "token" });
    getUserByEmail.mockResolvedValue({
      user_id: "1",
      email: "test",
      password: "1234",
      createdAt: "12",
      updatedAt: "",
      roles: [{ role_id: "2", value: "admin", description: "test" }],
      profile: {
        profile_id: "3",
        first_name: "jon",
        last_name: "bil",
        phone: "1234",
        city: "moscow",
        user_id: "1",
      },
    });
    await act(
      () =>
        (store = renderWithProviders(
          <Layout title={"test"}>
            <h1>text</h1>
          </Layout>
        ))
    );
    await waitFor(() => {
      expect(authSpy).toHaveBeenCalled();
      expect(refreshSpy).toHaveBeenCalled();
      expect(getUserByEmail).toHaveBeenCalled();
      expect(store.store.getState().auth).toEqual({
        userEmail: "test",
        isLogged: true,
        role: "admin",
      });
      expect(store.store.getState().auth.role).toBe("admin");
    });
  });
  it("should call debouncedResize after resize window", async () => {
    const authSpy = jest.spyOn(userApi, "isUserAuthorized");
    authSpy.mockResolvedValue(false);
    await act(
      () =>
        (store = renderWithProviders(
          <Layout title={"test"}>
            <h1>text</h1>
          </Layout>
        ))
    );

    await act(() => window.dispatchEvent(new Event("resize")));
    act(() => jest.runAllTimers());

    await waitFor(() =>
      expect(store.store.getState().windowSize).toEqual({
        height: 768,
        width: 1024,
      })
    );
  });
  it("should set a proper value to store", async () => {
    const userData = {
      user_id: "1",
      email: "",
      password: "1234",
      createdAt: "12",
      updatedAt: "",
      roles: [{ role_id: "2", description: "test" }],
      profile: {
        profile_id: "3",
        first_name: "jon",
        last_name: "bil",
        phone: "1234",
        city: "moscow",
        user_id: "1",
      },
    };
    (isUserAuthorized as jest.Mock).mockResolvedValue(true);
    (refreshAccessToken as jest.Mock).mockResolvedValue({
      email: "",
      accessToken: "token",
    });
    (getUserByEmail as jest.Mock).mockResolvedValue(userData);
    await act(
      () =>
        (store = renderWithProviders(
          <Layout title={"test"}>
            <h1>text</h1>
          </Layout>
        ))
    );
    await waitFor(() => {
      expect(isUserAuthorized).toHaveBeenCalled();
      expect(refreshAccessToken).toHaveBeenCalled();
      expect(getUserByEmail).toHaveBeenCalled();
      expect(store.store.getState().auth).toEqual({
        userEmail: "",
        isLogged: true,
        role: "",
      });
      expect(store.store.getState().auth.role).toBe("");
    });
  });
});
