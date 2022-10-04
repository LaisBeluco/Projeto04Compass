import React from "react";
import * as E from "./styled";
import Form from "../../Components/Form";
import mask from "../../assets/mask.png";
import logoMobile from "../../assets/logoMobile.png";
import { Button } from "../../Components/UI";

export function Login() {
  return (
    <E.Fundo>
      <E.ContainerLogin>
        <E.ContainerLogoMobile>
          <E.ImgLogoMobile src={logoMobile} />
        </E.ContainerLogoMobile>
        <E.Cadastro>
          <E.Welcome>
            <E.Titulo>Olá,</E.Titulo>
            <E.Text>
              Para continuar navegando de forma segura, efetue o login na rede.
            </E.Text>
          </E.Welcome>
          <Form />
        </E.Cadastro>
        <E.ImgPc src={mask} />
      </E.ContainerLogin>
    </E.Fundo>
  );
}

export default Login;
