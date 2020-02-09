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
    margin: 1rem;
  }
`;

function App() {
  return (
    <Main>
      <Form>
        <Input />
        <Input />
        <Input type="email" ariaLabel="email" />
        <Input type="password" ariaLabel="password" />
        <Input type="password" ariaLabel="confirm password" />
        <Button type="submit" ariaLabel="enviar formulário">
          Enviar
        </Button>
      </Form>
    </Main>
  );
}

export default App;
