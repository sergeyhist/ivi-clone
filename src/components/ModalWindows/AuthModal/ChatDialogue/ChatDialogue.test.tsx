import ChatDialogue from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDialogue";
import { renderWithProviders } from "/src/utils/test-utils";
import { fireEvent, waitFor } from "@testing-library/react";
import {
  createUser,
  getUserByEmail,
  login,
  ResponseWithToken,
} from "/src/api/user";

jest.mock("axios");
jest.mock("src/api/user");

describe("ChatDialogue", () => {
  const setProgressBarWidth = jest.fn();
  const setIsEmailExist = jest.fn();
  const email = "test@example.com";
  const password = "password";
  const mockResponse: ResponseWithToken = {
    accessToken: "some-token",
  };
  const userData = {
    user_id: "1",
    email: "test@example.com",
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
  };
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should renders without errors", () => {
    const {
      component: { getByTestId },
    } = renderWithProviders(
      <ChatDialogue
        setProgressBarWidth={setProgressBarWidth}
        setIsEmailExist={setIsEmailExist}
        isEmailExist={false}
      />
    );
    expect(getByTestId("form")).toBeInTheDocument();
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
    (login as jest.Mock).mockResolvedValue(mockResponse);
    (getUserByEmail as jest.Mock).mockResolvedValue(userData);
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
    (login as jest.Mock).mockResolvedValue(mockResponse);
    (getUserByEmail as jest.Mock).mockResolvedValue(userData);
    const emailInput = getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(getByTestId("email-input-button"));
    fireEvent.click(getByTestId("email-change"));
    expect(setProgressBarWidth).toHaveBeenCalledWith({ width: 10 });
    expect(setIsEmailExist).toHaveBeenCalledWith(undefined);
    expect(store.getState().auth).toEqual({ isLogged: false, userEmail: "" });
  });
  it("should login user", async () => {
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

    (login as jest.Mock).mockResolvedValue(mockResponse);
    (getUserByEmail as jest.Mock).mockResolvedValue(userData);

    const emailInput = getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.click(getByTestId("email-input-button"));
    const passwordInput = getByTestId("password-input");

    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(getByTestId("password-input-button"));

    await waitFor(() => {
      expect(getUserByEmail).toHaveBeenCalledTimes(2);
      expect(store.getState().auth.role).toBe("admin");
      expect(login).toHaveBeenCalledTimes(1);
      expect(store.getState().auth).toEqual({
        isLogged: false,
        userEmail: "test@example.com",
        role: "admin",
      });
      expect(store.getState().showModal.showAuthModal).toBe(false);
    });
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
    (login as jest.Mock).mockResolvedValue(mockResponse);
    (getUserByEmail as jest.Mock).mockResolvedValue(userData);
    (createUser as jest.Mock).mockResolvedValue({ email, password });
    const emailInput = getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.click(getByTestId("email-input-button"));
    const passwordInput = getByTestId("password-input");

    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(getByTestId("password-input-button"));

    expect(createUser).toHaveBeenCalledTimes(1);
    expect(createUser).toHaveBeenCalledWith(email, password);
  });
  it("shouldn't display hint message after click on email submit button", () => {
    const {
      component: { getByTestId },
    } = renderWithProviders(
      <ChatDialogue
        setProgressBarWidth={setProgressBarWidth}
        setIsEmailExist={setIsEmailExist}
        isEmailExist={false}
      />
    );
    (getUserByEmail as jest.Mock).mockResolvedValue(userData);
    (login as jest.Mock).mockResolvedValue(mockResponse);
    (createUser as jest.Mock).mockResolvedValue({ email, password });
    const emailInput = getByTestId("email-input") as HTMLInputElement;
    const form = getByTestId("form");
    fireEvent.submit(form);
    expect(emailInput.value).toBe("");
    expect(setProgressBarWidth).toHaveBeenCalled();
    expect(setProgressBarWidth).toHaveBeenCalledWith({ width: 50 });
  });
  it("a", async () => {
    const userData = {
      user_id: "1",
      email: "test@example.com",
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
    const {
      store,
      component: { getByTestId, getByText },
    } = renderWithProviders(
      <ChatDialogue
        setProgressBarWidth={setProgressBarWidth}
        setIsEmailExist={setIsEmailExist}
        isEmailExist={true}
      />
    );
    (getUserByEmail as jest.Mock).mockResolvedValue(userData);
    (login as jest.Mock).mockResolvedValue(mockResponse);
    const hintMessage = getByText("hintMessage.subtitle");
    const emailInput = getByTestId("email-input") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.click(getByTestId("email-input-button"));
    expect(hintMessage).not.toBeInTheDocument();

    const passwordInput = getByTestId("password-input");

    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(getByTestId("password-input-button"));
    await waitFor(() => expect(store.getState().auth.role).toBe(""));
  });
});
