import React from "react";
import Input from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../styles";

export default {
  title: "Input"
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Input ariaLabel="Default story" />
  </ThemeProvider>
);
