import { act, renderHook } from "@testing-library/react";
import axios, { AxiosError } from "axios";
import { useAppInterceptors } from "/src/hooks/useAppInterceptors";
import { Provider } from "react-redux";
import { store } from "/src/store";
import { ReactNode } from "react";
import useOverflowHidden from "../hooks/useOverflowHidden";
import { isBrowser } from "../utils/isBrowser";

jest.mock("src/utils/isBrowser");

/* eslint-disable */
describe("useAppInterceptors", () => {
  it("should throw an error and call dispatch", async () => {
    const axiosErr = new AxiosError("error", undefined, undefined, undefined, {
      status: 401,
    } as any);
    const axiosSpy = jest.spyOn(axios.interceptors.response, "use");

    axiosSpy.mockImplementation((() => {}) as any);
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    await act(() => renderHook(() => useAppInterceptors(), { wrapper: Wrapper }));
    try {
      await axiosSpy.mock.calls[0][1]?.(axiosErr);
    } catch (err) {
      expect(store.getState().auth).toEqual({ isLogged: false, userEmail: "" });
      expect(store.getState().showModal.showAuthModal).toBeTruthy();
    }
  });
  it("should return response if error hasn't passed", async () => {
    const axiosSpy = jest.spyOn(axios.interceptors.response, "use");
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
    await act(() => renderHook(() => useAppInterceptors(), { wrapper: Wrapper }));

    expect(await axiosSpy.mock.calls[0][0]?.({} as any)).toStrictEqual({});
  });
});

describe("useAppInterceptors", () => {
  it("should throw an error and call dispatch", async () => {
    (isBrowser as jest.Mock).mockImplementationOnce(() => true);
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
    await act(() =>
      renderHook(() => useOverflowHidden(false), { wrapper: Wrapper })
    );
  });
  it("should throw an error and call dispatch", async () => {
    (isBrowser as jest.Mock).mockImplementationOnce(() => true);
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
    await act(() => renderHook(() => useOverflowHidden(true), { wrapper: Wrapper }));
  });
  it("should throw an error and call dispatch", async () => {
    (isBrowser as jest.Mock).mockImplementationOnce(() => false);
    const Wrapper = ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );
    (isBrowser as jest.Mock).mockImplementationOnce(() => true);
    await act(() => renderHook(() => useOverflowHidden(true), { wrapper: Wrapper }));
  });
});
