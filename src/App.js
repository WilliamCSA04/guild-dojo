import React from "react";
import styled from "styled-components";
import Input from "./components/Input";
import Button from "./components/Button";

const Main = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.background};
`;

const Form = styled.form`
  display: grid;
  margin: auto;
  * {
    width: 15rem;
    margin: 0 1rem;
  }
  label {
    margin-top: 0.5rem;
    &:first-of-type {
      margin-top: 1rem;
    }
  }
  input {
    margin-bottom: 0.5rem;
    &:last-of-type {
      margin-bottom: 1rem;
    }
  }
`;

const Label = styled.label`
  color: ${props => props.theme.colors.font};
`;

const SubmitButton = styled(Button)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.font};
  font-weight: bold;
`;

function App() {
  return (
    <Main>
      <Form>
        <Label htmlFor="name">Name</Label>
        <Input id="name" ariaLabel="name" />
        <Label htmlFor="age">Age</Label>
        <Input id="age" type="number" ariaLabel="age" />
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" ariaLabel="email" />
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" ariaLabel="password" />
        <Label htmlFor="confirm passowrd">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          ariaLabel="confirm password"
        />
        <SubmitButton type="submit" ariaLabel="enviar formulário">
          Enviar
        </SubmitButton>
      </Form>
    </Main>
  );
}

export default App;
