import React from "react";
import { render } from "@testing-library/react";
import Input from ".";

describe("<Input /> snapshot", () => {
  it("renders the component with default props", () => {
    const container = render(
      <Input ariaLabel="Testing input" onChange={() => {}} />
    );
    expect(container.baseElement).toMatchSnapshot();
  });

  it("renders the component with defaultValue", () => {
    const container = render(
      <Input
        ariaLabel="Testing input"
        onChange={() => {}}
        defaultValue="Text"
      />
    );
    expect(container.baseElement).toMatchSnapshot();
  });
});
