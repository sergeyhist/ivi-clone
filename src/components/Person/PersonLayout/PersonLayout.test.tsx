import {render} from "@testing-library/react";
import PersonLayout from "/src/components/Person/PersonLayout/PersonLayout";

describe("PersonLayout",()=>{
  it("should renders without errors",()=>{
    const {getByTestId} = render(<PersonLayout>child</PersonLayout>);
    expect(getByTestId("person-layout")).toBeInTheDocument();
  })
})