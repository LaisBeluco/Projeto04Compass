import React from "react";
import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";
import { corSecundaria } from "../UI/variaveis";

const UserRegistration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 223px;
`;

const Input = styled.input`
  background-color: transparent;
  border: 1px solid ${corPrimaria};
  border-radius: 50px;
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

export const Inputs = () => {
  return (
    <UserRegistration>
      <ReistrationTexLogin>Login</ReistrationTexLogin>
      <Input
        type="email"
        id="email"
        name="email"
        required
        placeholder="Usuário"
      />
      <Input
        type="password"
        id="senha"
        name="senha"
        required
        placeholder="Senha"
      />
    </UserRegistration>
  );
};
