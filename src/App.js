import React, { useState } from "react";
import styled from "styled-components";
import { shade } from "polished";
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
  place-items: center;
  margin: auto;
  border-radius: 0.2rem;
  background: ${props => shade(0.2, props.theme.colors.background)};
  -webkit-box-shadow: 0px 10px 22px -3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 10px 22px -3px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 10px 22px -3px rgba(0, 0, 0, 0.4);
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
    background: ${props => shade(0.5, props.theme.colors.background)};
    color: ${props => props.theme.colors.font};
    margin-bottom: 0.5rem;
    &:last-of-type {
      margin-bottom: 1rem;
    }
  }
  button {
    margin: 1rem;
  }
`;

const Label = styled.label`
  color: ${props => props.theme.colors.font};
`;

const SubmitButton = styled(Button)`
  background: ${props =>
    `linear-gradient(to right, ${props.theme.colors.primary}, ${props.theme.colors.secondary})`};
  color: ${props => props.theme.colors.font};
  font-weight: bold;
`;

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <Main>
      <Form>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          ariaLabel="name"
          defaultValue={name}
          onChange={setName}
        />
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          ariaLabel="age"
          defaultValue={age}
          onChange={setAge}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          ariaLabel="email"
          defaultValue={email}
          onChange={setEmail}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          ariaLabel="password"
          defaultValue={password}
          onChange={setPassword}
        />
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          ariaLabel="confirm password"
          defaultValue={confirmPassword}
          onChange={setConfirmPassword}
        />
        <SubmitButton type="submit" ariaLabel="Submit form">
          Send
        </SubmitButton>
      </Form>
    </Main>
  );
}

export default App;
