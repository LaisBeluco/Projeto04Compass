import React from "react";
import styled from "styled-components";
import { Inputs } from "../../Components/Inputs";
import { corSecundaria } from "../../Components/UI/variaveis";
import mask from "../../assets/mask.svg";

const Fundo = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  justify-content: center;
  
  height: 100vh;
`;

const Cadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.266rem;
  color: ${corSecundaria};
`;

const Titulo = styled.h1`
  font-size: 3.75rem;
  font-weight: 400;
  color: ${corSecundaria};
`;

const Welcome = styled.div`
  margin-bottom: 135px;
`;

const ImgPc = styled.div`
  background-image: url(${mask});
  background-repeat: no-repeat;
  width: 60vw;
  height: 100vh;
`;

function Login() {
  return (
    <Fundo>
      <Cadastro>
        <Welcome>
          <Titulo>Olá,</Titulo>
          <Text>
            Para continuar navegando de forma segura, efetue o login na rede.
          </Text>
        </Welcome>
        <form>
          <Inputs />
        </form>
      </Cadastro>
      <ImgPc />
    </Fundo>
  );
}

export default Login;
