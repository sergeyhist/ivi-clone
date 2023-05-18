import ChatDialogue from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDialogue";
import {renderWithProviders} from "/src/utils/test-utils";
import {fireEvent} from "@testing-library/react";

jest.mock("../../../../api/userApi");


describe("ChatDialogue",()=>{
  const setProgressBarWidth = jest.fn();
  const setIsEmailExist = jest.fn();
  
  it("should renders without errors",()=>{
    const {container} = renderWithProviders(<ChatDialogue setProgressBarWidth={setProgressBarWidth} setIsEmailExist={setIsEmailExist} isEmailExist={false}/>);
    expect(container).toBeDefined();
    expect(setProgressBarWidth).not.toHaveBeenCalled();
  });
  
  it("should update the email state when the email input changes",()=>{
    const { getByTestId } = renderWithProviders(
      <ChatDialogue
        setProgressBarWidth={setProgressBarWidth}
        setIsEmailExist={setIsEmailExist}
        isEmailExist={false}
      />
    );
    const emailInput = getByTestId("email-input");
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).toBe('test@example.com');
  });
  
  // it('should call the handleFormSubmit function when the form is submitted', () => {
  //   const mockLogin= jest.spyOn(userApi,"login");
  //   const mockCreateUser = jest.spyOn(userApi,"createUser");
  //   const { getByLabelText, getByText, getByTestId } = renderWithProviders(
  //     <ChatDialogue
  //       setProgressBarWidth={setProgressBarWidth}
  //       setIsEmailExist={setIsEmailExist}
  //       isEmailExist={false}
  //     />
  //   );
  //
  //   const emailInput = getByTestId("email-input");
  //   const emailSubmitButton = getByTestId('email-input-button');
  //
  //   fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  //   fireEvent.click(emailSubmitButton);
  //
  //
  //   const passwordInput = getByTestId('password-input');
  //   const passwordSubmitButton = getByTestId("password-input-button")
  //
  //   fireEvent.change(passwordInput, { target: { value: 'password123' } });
  //   fireEvent.click(passwordSubmitButton);
  //
  //   // Проверяем, что функция handleFormSubmit была вызвана
  //   expect(setProgressBarWidth).toHaveBeenCalled();
  // });
})