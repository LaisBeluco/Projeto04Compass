import React from "react";
import * as E from "./styled";
import Form from "../../Components/Form";

export function Login() {
  return (
    <E.Fundo>
      <E.Cadastro>
        <E.Welcome>
          <E.Titulo>Olá,</E.Titulo>
          <E.Text>
            Para continuar navegando de forma segura, efetue o login na rede.
          </E.Text>
        </E.Welcome>
        <Form />
      </E.Cadastro>
      <E.ImgPc />
    </E.Fundo>
  );
}

export default Login;
