import {render} from "@testing-library/react";
import PersonLayout from "/src/components/Person/PersonLayout/PersonLayout";

describe("PersonLayout",()=>{
  it("should renders without errors",()=>{
    const {container} = render(<PersonLayout>child</PersonLayout>);
    expect(container).toBeDefined();
  })
})