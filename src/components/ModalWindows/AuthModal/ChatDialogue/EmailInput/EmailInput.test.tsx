import {fireEvent, render, screen} from "@testing-library/react";
import EmailInput from "/src/components/ModalWindows/AuthModal/ChatDialogue/EmailInput/EmailInput";
import { store } from "/src/store";
import {Provider} from "react-redux";

const mockTranslation = jest.fn().mockReturnValue("Mock Text");
jest.mock("next-i18next", () => ({
  useTranslation: () => ({
    t: mockTranslation,
  }),
}));

const mockDispatch = jest.fn();


const mockGetUserByEmail = jest.fn();


const mockValidateEmail = jest.fn();


const mockSetAuth = jest.fn();

describe("EmailInput",()=>{
  jest.mock("../ChatDialogue.utils", () => ({

    validateEmail: mockValidateEmail,
  }));
  jest.mock("../../../../../store/slices/authSlice", () => ({
    setAuth: mockSetAuth,
  }));
  jest.mock("../../../../../api/userApi", () => ({
    getUserByEmail: mockGetUserByEmail,
  }));
  jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: () => mockDispatch,
  }));
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const setIsEmailInputSuccess = jest.fn();
  const setIsEmailExist = jest.fn();
  const setShowErrorMessage = jest.fn();

  it("should renders without errors",()=>{
    const props = {
      isEmailInputSuccess: false,
      setIsEmailInputSuccess: jest.fn(),
      setIsEmailExist: jest.fn(),
      showErrorMessage: false,
      setShowErrorMessage: jest.fn(),
      email: "",
      setEmail: jest.fn()
    }
    const {container} = render(<Provider store={store}><EmailInput {...props}/></Provider>  )
    expect(container).toBeDefined();
    expect(screen.getAllByText("Mock Text")[0]).toBeInTheDocument();
  })
  it("handles email submission with valid email", () => {
    const props = {
      isEmailInputSuccess: false,
      setIsEmailInputSuccess: jest.fn(),
      setIsEmailExist: jest.fn(),
      showErrorMessage: false,
      setShowErrorMessage: jest.fn(),
      email: "test@example.com",
      setEmail: jest.fn(),
    };

    mockValidateEmail.mockReturnValue(true);

    render(
      <Provider store={store}>
        <EmailInput {...props} />
      </Provider>
    );

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(mockValidateEmail).toHaveBeenCalledWith("test@example.com");
    expect(setShowErrorMessage).toHaveBeenCalledWith(false);
    expect(setIsEmailInputSuccess).toHaveBeenCalledWith(true);
    expect(mockDispatch).toHaveBeenCalledWith(mockSetAuth({ isLogged: false, userEmail: "test@example.com" }));
  });
})