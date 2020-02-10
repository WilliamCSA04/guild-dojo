import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

describe("<Button /> snapshot", () => {
  it("renders the component without any changes", () => {
    const container = render(
      <Button ariaLabel="Testing">Testing Button</Button>
    );
    expect(container.baseElement).toMatchSnapshot();
  });
});
