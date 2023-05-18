import ChatDialogue from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDialogue";
import {renderWithProviders} from "/src/utils/test-utils";

describe("ChatDialogue",()=>{
  const setProgressBarWidth = jest.fn();
  const setIsEmailExist = jest.fn();
  it("should renders without errors",()=>{
    const {container} = renderWithProviders(<ChatDialogue setProgressBarWidth={setProgressBarWidth} setIsEmailExist={setIsEmailExist} isEmailExist={false}/>);
    expect(container).toBeDefined();
  });
  it("should call setProgressBarWidth")
})