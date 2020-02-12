import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

describe("<Button /> snapshot", () => {
  it("renders the component with default props", () => {
    const container = render(
      <Button ariaLabel="Testing" dataTestID="testing">
        Testing Button
      </Button>
    );
    expect(container.asFragment()).toMatchSnapshot();
  });

  it("renders the component with ariaLabelledby", () => {
    const container = render(
      <Button ariaLabel="Testing" ariaLabelledby="Testing" dataTestID="testing">
        Testing Button
      </Button>
    );
    expect(container.asFragment()).toMatchSnapshot();
  });
});
