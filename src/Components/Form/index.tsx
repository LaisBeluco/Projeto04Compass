import React, { FormEvent } from "react";
import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";
import { corSecundaria } from "../UI/variaveis";
import { useState } from "react";
import { Button } from "../UI";
import { useNavigate } from "react-router-dom";
import * as E from "./styled";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi";

const UserRegistration = styled.form`
  display: flex;
  flex-direction: column;
  height: 25.313rem;
  justify-content: space-between;
`;

const Input = styled.input<{ NoValidated: any }>`
  background-color: transparent;
  border: 1px solid
    ${({ NoValidated }: any) => (NoValidated ? "#E9B425" : corPrimaria)};
  border-radius: 50px;
  box-sizing: border-box;
  width: 23.688rem;
  height: 3.75rem;
  font-size: 1rem;
  padding: 1.25rem;
  color: ${corSecundaria};
`;

const ReistrationTexLogin = styled.h2`
  font-weight: 400;
  line-height: 1.266rem;
  color: ${corSecundaria};
  font-size: 1.875rem;
`;

interface PropsIcon {
  focused: boolean;
}

export const Icon = styled.div<PropsIcon>`
  display: flex;
  width: 15%;
  transition: 0.5s transform;
  justify-content: center;
  align-items: center;
`;

export default function Form() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [NoValidated, setNoValidated] = useState(Boolean);

  function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let regEmail = /[^@\t\r\n]+@[^@\t\r\n]+\.[^@\t\r\n]+/;

    if (regEmail.test(email) && senha.length > 3) {
      navigate("/home");
      return setNoValidated(false);
    } else {
      return setNoValidated(true);
    }
  }

  interface props {
    email: String;
    senha: String;
  }

  return (
    <UserRegistration onSubmit={sendForm}>
      <ReistrationTexLogin>Login</ReistrationTexLogin>
      <div style={{ position: "relative" }}>
        <Input
          NoValidated={NoValidated}
          type="string"
          id="email"
          name="email"
          required
          placeholder="Usuário"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <E.Icon user={true} transition={email}/>
      </div>
      <div style={{ position: "relative" }}>
        <Input
          NoValidated={NoValidated}
          type="password"
          id="senha"
          name="senha"
          required
          placeholder="Senha"
          value={senha}
          onChange={(event) => {
            setSenha(event.target.value);
          }}
        />
        <E.Icon user={false} transition={senha}/>
      </div>
      {NoValidated ? (
        <E.MesageError>
          Ops, usuário ou senha inválidos. Tente novamente!
        </E.MesageError>
      ) : (
        <div></div>
      )}
      <Button>Continuar</Button>
    </UserRegistration>
  );
}

// function setNoValidated(test: boolean) {
//   if (test) {
//     console.log("Não foi alguma coisa!");
//   }
// }
