import ChatDialogue from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDialogue";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent } from "@testing-library/react";
import axios from "axios";
import { ResponseWithToken } from "/src/api/user";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ChatDialogue", () => {
  const setProgressBarWidth = jest.fn();
  const setIsEmailExist = jest.fn();
  afterEach(()=>{
    jest.clearAllMocks();
  })

  it("should renders without errors", () => {
    const {
      component: { container },
    } = renderWithProviders(
      <ChatDialogue
        setProgressBarWidth={setProgressBarWidth}
        setIsEmailExist={setIsEmailExist}
        isEmailExist={false}
      />
    );
    expect(container).toBeDefined();
    expect(setProgressBarWidth).not.toHaveBeenCalled();
  });

  it("should update the email state when the email input changes", () => {
    const {
      component: { getByTestId },
    } = renderWithProviders(
      <ChatDialogue
        setProgressBarWidth={setProgressBarWidth}
        setIsEmailExist={setIsEmailExist}
        isEmailExist={false}
      />
    );
    const emailInput = getByTestId("email-input") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
    fireEvent.click(getByTestId("email-input-button"));
    expect(setProgressBarWidth).toHaveBeenCalledWith({ width: 50 });
  });
  it("should change state after click", () => {
    const {
      store,
      component: { getByTestId },
    } = renderWithProviders(
      <ChatDialogue
        setProgressBarWidth={setProgressBarWidth}
        setIsEmailExist={setIsEmailExist}
        isEmailExist={false}
      />
    );
    const emailInput = getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(getByTestId("email-input-button"));
    fireEvent.click(getByTestId("email-change"));
    expect(setProgressBarWidth).toHaveBeenCalledWith({ width: 10 });
    expect(setIsEmailExist).toHaveBeenCalledWith(undefined);
    expect(store.getState().auth).toEqual({ isLogged: false, userEmail: "" });
  });
  it("should login user", () => {
    const {
      store,
      component: { getByTestId },
    } = renderWithProviders(
      <ChatDialogue
        setProgressBarWidth={setProgressBarWidth}
        setIsEmailExist={setIsEmailExist}
        isEmailExist={true}
      />
    );
    const email = "test@example.com";
    const mockResponse: ResponseWithToken = {
      accessToken: "some-token",
    };
    const userData = {
      id: 1,
      email,
      name: "John Doe",
      roles: [{ value: "role" }],
    };

    mockedAxios.request.mockResolvedValueOnce({ data: mockResponse });
    mockedAxios.get.mockResolvedValueOnce({ data: userData });

    const emailInput = getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.click(getByTestId("email-input-button"));
    const passwordInput = getByTestId("password-input");

    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(getByTestId("password-input-button"));
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    expect(store.getState().auth).toEqual({
      isLogged: true,
      userEmail: "test@example.com",
    });
    expect(store.getState().showModal.showAuthModal).toBe(false);
  });
  it("should create user", () => {
    const {
      component: { getByTestId },
    } = renderWithProviders(
      <ChatDialogue
        setProgressBarWidth={setProgressBarWidth}
        setIsEmailExist={setIsEmailExist}
        isEmailExist={false}
      />
    );
    const email = "test@example.com";
    const password = "password";
    const emailInput = getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.click(getByTestId("email-input-button"));
    const passwordInput = getByTestId("password-input");

    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(getByTestId("password-input-button"));
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${String(process.env.SERVER_HOST)}/signup`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email,
        password,
      }),
    };
    expect(mockedAxios.request).toHaveBeenCalledTimes(1);
    expect(mockedAxios.request).toHaveBeenCalledWith(config);
  });
});
