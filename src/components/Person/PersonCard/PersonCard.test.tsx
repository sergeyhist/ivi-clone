import { render } from "@testing-library/react";
import PersonCard from "/src/components/Person/PersonCard/PersonCard";
import { mockPerson } from "/src/utils/person";

describe("PersonCard", () => {
  it("should renders without errors", () => {
    const { container, getByText } = render(
      <PersonCard
        person={mockPerson}
        firstName={mockPerson.first_name_en}
        lastName={mockPerson.last_name_en}
      />
    );
    expect(container).toBeDefined();
    expect(
      getByText(mockPerson.first_name_en + " " + mockPerson.last_name_en)
    ).toBeInTheDocument();
  });
});
