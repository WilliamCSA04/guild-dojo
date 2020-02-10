import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles";

describe("<App /> inputs", () => {
  it("App must have one name input", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const inputs = container.getAllByTestId("name");
    expect(inputs).toHaveLength(1);
  });
  it("App must have one age input", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const inputs = container.getAllByTestId("age");
    expect(inputs).toHaveLength(1);
  });
  it("App must have one email input", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const inputs = container.getAllByTestId("email");
    expect(inputs).toHaveLength(1);
  });
  it("App must have one password input", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const inputs = container.getAllByTestId("password");
    expect(inputs).toHaveLength(1);
  });
  it("App must have one confirm password input", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const inputs = container.getAllByTestId("confirmPassword");
    expect(inputs).toHaveLength(1);
  });
  it("Name input should change whenever user interact with it", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const input = container.getByTestId("name");
    const newValue = "Will Turner";
    fireEvent.change(input, { target: { defaultValue: newValue } });
    expect(input.defaultValue).toBe(newValue);
  });
});
