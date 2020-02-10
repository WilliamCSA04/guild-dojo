import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles";
import Input from ".";

describe("<Input /> snapshot", () => {
  it("renders the component with default props", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <Input
          ariaLabel="Testing input"
          dataTestID="Test"
          onChange={() => {}}
        />
      </ThemeProvider>
    );
    expect(container.asFragment()).toMatchSnapshot();
  });

  it("renders the component with defaultValue", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <Input
          ariaLabel="Testing input"
          dataTestID="Test"
          onChange={() => {}}
          defaultValue="Text"
        />
      </ThemeProvider>
    );
    expect(container.asFragment()).toMatchSnapshot();
  });
});
