import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

describe("<Button /> snapshot", () => {
  it("renders the component with default props", () => {
    const container = render(
      <Button ariaLabel="Testing">Testing Button</Button>
    );
    expect(container.baseElement).toMatchSnapshot();
  });

  it("renders the component with ariaLabelledby", () => {
    const container = render(
      <Button ariaLabel="Testing" ariaLabelledby="Testing">
        Testing Button
      </Button>
    );
    expect(container.baseElement).toMatchSnapshot();
  });
});
