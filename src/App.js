import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <form>
        <Input />
        <Input />
        <Input type="email" ariaLabel="email" />
        <Input type="password" ariaLabel="password" />
        <Input type="password" ariaLabel="confirm password" />
        <Button type="submit" ariaLabel="enviar formulário">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default App;
