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
  it("Age input should change whenever user interact with it", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const input = container.getByTestId("age");
    const newValue = "45";
    fireEvent.change(input, { target: { defaultValue: newValue } });
    expect(input.defaultValue).toBe(newValue);
  });
  it("Email input should change whenever user interact with it", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const input = container.getByTestId("email");
    const newValue = "arya@stark.com";
    fireEvent.change(input, { target: { defaultValue: newValue } });
    expect(input.defaultValue).toBe(newValue);
  });
  it("Password input should change whenever user interact with it", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const input = container.getByTestId("password");
    const newValue = "deUmàOito";
    fireEvent.change(input, { target: { defaultValue: newValue } });
    expect(input.defaultValue).toBe(newValue);
  });
  it("Confirm password input should change whenever user interact with it", () => {
    const container = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    const input = container.getByTestId("confirmPassword");
    const newValue = "deUmàOito";
    fireEvent.change(input, { target: { defaultValue: newValue } });
    expect(input.defaultValue).toBe(newValue);
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
    const button = container.getByTestId("submit");
    fireEvent.submit(button);
    expect(onSubmit).toBeCalled();
  });
});
