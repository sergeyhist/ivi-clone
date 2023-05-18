import {render} from "@testing-library/react";
import PersonCard from "/src/components/Person/PersonCard/PersonCard";
import {mockPersons} from "/src/utils/person";

describe("PersonCard",()=>{
  it("should renders without errors",()=>{
    const {container, getByText} = render(<PersonCard person={mockPersons[0]} firstName={mockPersons[0].first_name_en} lastName={mockPersons[0].last_name_en}/>)
    expect(container).toBeDefined();
    expect(getByText(mockPersons[0].first_name_en + " " + mockPersons[0].last_name_en)).toBeInTheDocument();
  });
})