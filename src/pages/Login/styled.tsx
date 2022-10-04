import styled from "styled-components";
import { corSecundaria } from "../../Components/UI/variaveis";
import mask from "../../assets/mask.png";

export const Fundo = styled.div`
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  height: 100vh;
  width: 100vw;
`;

export const ContainerLogin = styled.div`
  display: flex;
  margin: 0 auto;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100vh;
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

export const Text = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.266rem;
  color: ${corSecundaria};
  width: 18rem;
  @media (max-width: 470px) {
    font-size: 0.95rem;
    width: 100%;
  }
`;

export const Titulo = styled.h1`
  font-size: 3.75rem;
  font-weight: 400;
  width: 18rem;
  color: ${corSecundaria};
  @media (max-width: 360px) {
    font-size: 3rem;
    width: 100%;
  }
`;

export const Welcome = styled.div`
  padding-bottom: 25%;
  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const ImgLogoMobile = styled.img`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    width: 15rem;
    height: 3.5rem;
    margin: 3% 0;
  }
  @media (max-width: 470px) {
    display: block;
    width: 10rem;
    height: 2.25rem;
    margin: 3% 0;
  }
`;

export const ContainerLogoMobile = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImgPc = styled.img`
  object-fit: cover;
  object-position: top center;
  width: 50vw;
  height: 100vh;
  @media (max-width: 1000px) {
    display: none;
  }
`;
