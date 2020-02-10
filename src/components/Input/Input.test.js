import React from "react";
import { render } from "@testing-library/react";
import Input from ".";

describe("<Input /> snapshot", () => {
  it("renders the component with default props", () => {
    const container = render(
      <Input ariaLabel="Testing input" dataTestID="Test" onChange={() => {}} />
    );
    expect(container.asFragment()).toMatchSnapshot();
  });

  it("renders the component with defaultValue", () => {
    const container = render(
      <Input
        ariaLabel="Testing input"
        dataTestID="Test"
        onChange={() => {}}
        defaultValue="Text"
      />
    );
    expect(container.asFragment()).toMatchSnapshot();
  });
});
