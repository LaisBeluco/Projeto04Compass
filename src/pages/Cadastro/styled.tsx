import styled from "styled-components";
import { corPrimaria, corSecundaria } from "../../Components/UI/variaveis";

export const Fundo = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  width: 100vw;
  height: 100vh;
  @media screen and (max-height: 680px) {
    min-height: 660px;
  }
`;

export const Input = styled.input<{ NoValidated: any }>`
  background-color: transparent;
  border: 1px solid
    ${({ NoValidated }: any) => (NoValidated ? "#E9B425" : corPrimaria)};
  border-radius: 50px;
  box-sizing: border-box;
  width: 23.688rem;
  margin-bottom: 0.30rem;
  font-size: 1rem;
  padding: 0.9rem 2.8rem 0.9rem 1.5rem;
  color: ${corSecundaria};
  ::placeholder {
    color: #e0e0e0;
  }
  @media (max-width: 480px) {
    width: 85%;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.4rem;
  height: 70.78px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100vh;
  @media (max-width: 1000px) {
    padding-top: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Cadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 3.5%;
  @media (max-width: 1000px) {
    padding: 0;
    margin: 3% 10%;
  }
`;

export const Label = styled.label`
  color: ${corPrimaria};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const TextResgister = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
  color: ${corPrimaria}
`
export const LinkResgister = styled.a`
  color: #68c2ec;
  text-decoration: underline;
`

export const ReistrationTexLogin = styled.h2`
  font-weight: 400;
  line-height: 1.266rem;
  color: ${corSecundaria};
  font-size: 1.875rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  @media (max-width: 360px) {
    font-size: 1.65rem;
  }
`;