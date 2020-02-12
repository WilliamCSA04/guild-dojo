import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles";
import buildMock from "./service/api";

describe("<App /> inputs", () => {
  it("App must have one name input", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  });
  it("App must have one age input", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  });
  it("App must have one email input", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  });
  it("App must have one password input", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  });
  it("App must have one confirm password input", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
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
  it("Age input should change whenever user interact with it", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  });
  it("Email input should change whenever user interact with it", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  });
  it("Password input should change whenever user interact with it", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  });
  it("Confirm password input should change whenever user interact with it", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  });
  it("Name should start on focus", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
  });
});

describe("<App /> Submitions", () => {
  it("Form should trigger an submit", () => {
    const onSubmit = jest.fn();
    const container = render(
      <ThemeProvider theme={theme}>
        <App onSubmit={onSubmit} />
      </ThemeProvider>
    );

    expect(onSubmit).toBeCalled();
  });
});
