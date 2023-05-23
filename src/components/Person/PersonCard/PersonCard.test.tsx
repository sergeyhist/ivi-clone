import { render } from "@testing-library/react";
import PersonCard from "/src/components/Person/PersonCard/PersonCard";
import { mockPerson } from "/src/utils/mocks/person";

describe("PersonCard", () => {
  it("should renders without errors", () => {
    const { getByTestId, getByText } = render(
      <PersonCard
        person={mockPerson}
        firstName={mockPerson.first_name_en}
        lastName={mockPerson.last_name_en}
      />
    );
    expect(getByTestId("person-card")).toBeInTheDocument();
    expect(
      getByText(mockPerson.first_name_en + " " + mockPerson.last_name_en)
    ).toBeInTheDocument();
  });
});
