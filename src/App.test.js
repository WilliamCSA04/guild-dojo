import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./styles";

describe("<App /> inputs", () => {
  const container = render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
  it("Name input should change whenever user interact with it", () => {
    const input = container.getByTestId("name");
    const newValue = "Will Turner";
    fireEvent.change(input, { target: { defaultValue: newValue } });
    expect(input.defaultValue).toBe(newValue);
  });
});
