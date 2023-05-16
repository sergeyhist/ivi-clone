import {render,screen} from "@testing-library/react";
import ChatMessage from "/src/components/ModalWindows/AuthModal/ChatMessage/ChatMessage";

describe("ChatMessage",()=>{
  it("should renders without errors",()=>{
    const {container} = render(<ChatMessage titleText="test"/>);
    expect(container).toBeDefined();
  });
  it("should render subtitle text",()=>{
    const subtitle = "subtitle"
    render(<ChatMessage titleText="test" subtitleText={subtitle}/> );
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  })
})