import {fireEvent, render, screen} from "@testing-library/react";
import PasswordInput from "/src/components/ModalWindows/AuthModal/ChatDialogue/PasswordInput/PasswordInput";
import '../../../../../utils/defaultToast';
import toastify from 'react-toastify'

jest.mock('react-toastify');

describe("PasswordInput", () => {
  const setShowErrorMessage = jest.fn();
  const setPassword = jest.fn();
  it("should renders without errors", () => {
    const { container } = render(
      <PasswordInput
        isEmailInputSuccess={false}
        isEmailExist={false}
        showErrorMessage={false}
        setShowErrorMessage={setShowErrorMessage}
        password={""}
        setPassword={setPassword}
      />
    );
    expect(container).toBeDefined();
  });
  it("should handle notify after invalid password",()=>{
    const mockToast = jest.spyOn(toastify,'toast');
    render(<PasswordInput
      isEmailInputSuccess={true}
      isEmailExist={true}
      showErrorMessage={false}
      setShowErrorMessage={setShowErrorMessage}
      password={"pas"}
      setPassword={setPassword}
    />);
    const submitButton = screen.getByTestId('custom-button');
    fireEvent.click(submitButton);
    expect(mockToast).toHaveBeenCalled()
  });
  it("should handle notify after invalid password",()=>{
    const mockToast = jest.spyOn(toastify,'toast');
    render(<PasswordInput
      isEmailInputSuccess={true}
      isEmailExist={true}
      showErrorMessage={false}
      setShowErrorMessage={setShowErrorMessage}
      password={"longstringchaeeeeeeee"}
      setPassword={setPassword}
    />);
    const submitButton = screen.getByTestId('custom-button');
    fireEvent.click(submitButton);
    expect(mockToast).toHaveBeenCalled();
  });
});