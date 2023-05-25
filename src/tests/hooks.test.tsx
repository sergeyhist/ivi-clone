import { act, renderHook } from "@testing-library/react";
import axios, { AxiosError } from "axios";
import { useAppInterceptors } from "/src/hooks/useAppInterceptors";
import { Provider } from "react-redux";
import { store } from "/src/store";
import { ReactNode } from "react";

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

    await act(() =>
      renderHook(() => useAppInterceptors(), { wrapper: Wrapper })
    );
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
    await act(() =>
      renderHook(() => useAppInterceptors(), { wrapper: Wrapper })
    );

    expect(await axiosSpy.mock.calls[0][0]?.({} as any)).toStrictEqual({});
  });
});
