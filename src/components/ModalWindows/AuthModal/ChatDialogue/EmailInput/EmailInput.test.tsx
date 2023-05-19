import { act, screen } from "@testing-library/react";
import EmailInput from "/src/components/ModalWindows/AuthModal/ChatDialogue/EmailInput/EmailInput";
import axios from "axios";
import { renderWithProviders } from "/src/utils/test-utils";
import { ToolkitStore } from "@reduxjs/toolkit/src/configureStore";
import { RootState } from "/src/store";

const mockTranslation = jest.fn().mockReturnValue("Mock Text");
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock("next-i18next", () => ({
  useTranslation: () => ({
    t: mockTranslation,
  }),
}));

describe("EmailInput", () => {
  const setIsEmailInputSuccess = jest.fn();
  const setIsEmailExist = jest.fn();
  const setShowErrorMessage = jest.fn();
  const setEmail = jest.fn();

  it("should renders without errors", () => {
    const props = {
      isEmailInputSuccess: false,
      setIsEmailInputSuccess,
      setIsEmailExist,
      showErrorMessage: false,
      setShowErrorMessage,
      email: "",
      setEmail,
    };
    const {
      component: { container },
    } = renderWithProviders(<EmailInput {...props} />);
    expect(container).toBeDefined();
    expect(screen.getAllByText("Mock Text")[0]).toBeInTheDocument();
  });
  it("handles email submission with valid email", async () => {
    const props = {
      isEmailInputSuccess: true,
      setIsEmailInputSuccess,
      setIsEmailExist,
      showErrorMessage: false,
      setShowErrorMessage,
      email: "test@example.com",
      setEmail,
    };
    const userData = { id: 1, name: "John Doe", email: "test@example.com" };

    mockedAxios.get.mockResolvedValueOnce({ data: userData });

    let store: ToolkitStore<RootState> | undefined;

    await act(async () => {
      store = renderWithProviders(<EmailInput {...props} />).store;
      return Promise.resolve();
    });

    expect(store?.getState().auth.isLogged).toBe(false);
    expect(store?.getState().auth.userEmail).toBe("test@example.com");
  });
});