import { fireEvent, render, screen } from "@testing-library/react";
import ChatHeader from "/src/components/ModalWindows/AuthModal/ChatHeader/ChatHeader";
import { Provider } from "react-redux";
import { store } from "/src/store";
jest.mock("next/router", () => require("next-router-mock"));
const mockTranslation = jest.fn().mockReturnValue("Mock Title");
jest.mock("next-i18next", () => ({
  useTranslation: () => ({
    t: mockTranslation,
  }),
}));

describe("ChatHeader", () => {
  const closeCallback = jest.fn();
  const progressBarWidth = { width: 77 };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should renders without errors", () => {
    const props = {
      closeCallback,
      progressBarWidth,
      isEmailExist: undefined,
    };
    const { getByTestId } = render(
      <Provider store={store}>
        <ChatHeader {...props} />
      </Provider>
    );
    expect(getByTestId("chat-header")).toBeInTheDocument();
    expect(screen.getByText("Mock Title")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("renders header with login title", () => {
    const props = {
      closeCallback,
      progressBarWidth,
      isEmailExist: true,
    };
    render(
      <Provider store={store}>
        <ChatHeader {...props} />
      </Provider>
    );

    expect(screen.getByText("Mock Title")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("renders header with registration title", () => {
    const props = {
      closeCallback,
      progressBarWidth,
      isEmailExist: false,
    };

    render(
      <Provider store={store}>
        <ChatHeader {...props} />
      </Provider>
    );

    expect(screen.getByText("Mock Title")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("calls closeCallback on button click", () => {
    const props = {
      closeCallback,
      progressBarWidth,
      isEmailExist: undefined,
    };

    render(
      <Provider store={store}>
        <ChatHeader {...props} />
      </Provider>
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(closeCallback).toHaveBeenCalledTimes(1);
  });
});