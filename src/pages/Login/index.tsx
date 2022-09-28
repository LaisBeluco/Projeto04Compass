import React from "react";
import styled from "styled-components";
import  Form  from "../../Components/Form";
import { corSecundaria } from "../../Components/UI/variaveis";
import mask from "../../assets/mask.png";
import { useNavigate } from "react-router-dom";

const Fundo = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  height: 100vh;
  margin: 0 auto;
`;

const Cadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.266rem;
  color: ${corSecundaria};
  width: 18.813rem;
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
  background-size: cover;
  width: 50vw;
  height: 100vh;
`;

export function Login() {
  return (
    <Fundo>
      <Cadastro>
        <Welcome>
          <Titulo>Olá,</Titulo>
          <Text>
            Para continuar navegando de forma segura, efetue o login na rede.
          </Text>
        </Welcome>
        <Form/>
      </Cadastro>
      <ImgPc />
    </Fundo>
  );
}

export default Login;
