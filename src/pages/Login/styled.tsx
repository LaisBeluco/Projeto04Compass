import styled from "styled-components";
import { corSecundaria } from "../../Components/UI/variaveis";
import mask from "../../assets/mask.png";

export const Fundo = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  height: 100vh;
  margin: 0 auto;
`;

export const Cadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.266rem;
  color: ${corSecundaria};
  width: 18.813rem;
`;

export const Titulo = styled.h1`
  font-size: 3.75rem;
  font-weight: 400;
  color: ${corSecundaria};
`;

export const Welcome = styled.div`
  margin-bottom: 135px;
`;

export const ImgPc = styled.div`
  background-image: url(${mask});
  background-repeat: no-repeat;
  background-size: cover;
  width: 50vw;
  height: 100vh;
`;