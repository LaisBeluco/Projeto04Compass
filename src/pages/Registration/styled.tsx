import styled from "styled-components";
import { corSecundaria, corPrimaria } from "../../Components/UI/variaveis";

export const UserRegistration = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50vw;
  justify-content: center;
`;

export const ContainerRegistration = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const ReistrationTexLogin = styled.h2`
  font-weight: 400;
  margin-bottom:  8%;
  line-height: 1.266rem;
  color: ${corSecundaria};
  font-size: 1.875rem;
  @media (max-width: 360px) {
    font-size: 1.65rem;
  }
`;

export const Input = styled.input<{ NoValidated: any }>`
  margin-bottom: 7%;
  background-color: transparent;
  border: 1px solid
    ${({ NoValidated }: any) => (NoValidated ? "#E9B425" : corPrimaria)};
  border-radius: 50px;
  box-sizing: border-box;
  width: 23.688rem;
  /* height: 3.75rem; */
  font-size: 1rem;
  padding: 0.9rem 2.8rem 0.9rem 1.5rem;
  color: ${corSecundaria};
  ::placeholder {
    color: #e0e0e0b9;
  }
  @media (max-width: 480px) {
    width: 85%;
  }
`;

export const MesageError = styled.span`
  color: #e9b425;
  font-weight: 700;
  font-size: 1rem;
  width: 17.688rem;
  text-align: center;
  align-self: center;
  @media (max-width: 425px) {
    width: 60vw;
    font-size: 0.85rem;
  }
`;
