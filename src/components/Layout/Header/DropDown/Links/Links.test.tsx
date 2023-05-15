import { render, screen } from "@testing-library/react";
import Links from "/src/components/Layout/Header/DropDown/Links/Links";

describe("Links", () => {
  const mockProps = {
    links: ["Link 1", "Link 2"],
    hrefs: ["genre=1", "genre=2"],
    title: "Links",
  };
  it("should render without errors", () => {
    render(<Links {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it("should render the links", () => {
    render(<Links {...mockProps} />);
    mockProps.links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("should render the links with correct hrefs", () => {
    render(<Links {...mockProps} />);
    const linkElements = screen.getAllByRole("link");
    linkElements.forEach((element, i) => {
      expect(element.getAttribute("href")).toBe(
        `/movies?${mockProps.hrefs[i]}`
      );
    });
  });
});