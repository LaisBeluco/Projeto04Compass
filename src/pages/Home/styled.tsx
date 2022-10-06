import styled from "styled-components";
import LogoCompasso from "../../assets/LogoCompasso.svg";
import Temperatura from "../../assets/temperatura.png";
import ballCompass from "../../assets/bolaCompass.svg";

export const Test = styled.div`
  /* height: 100vh; */
`;

export const Header = styled.header`
  display: flex;
  margin: 0 5%;
  justify-content: space-between;
  height: 15vh;
`;

export const Img = styled.img`
  width: 6.7rem;
  height: 2.672rem;
  margin: 25px 0 0 0;

  @media (min-width: 768px) {
    width: 9rem;
    height: 4rem;
  }
  @media (min-width: 1440px) {
    width: 10rem;
    height: 4rem;
  }
`;

export const Content = styled.div`
  margin: 0 5% 0 0;
  display: flex;
  height: 45vh;
  align-items: center;
  justify-content: end;
  
  @media (min-width: 1024px) {
    height: 80vh;
  }
  @media (min-width: 768px) {
    margin: 0 5%;
    justify-content: flex-end;
    align-items: center;
    height: 71.8vh;
  }
  @media (min-width: 700px) {

  }
`;

export const ImgCompass = styled.img`
  display: block;
  max-width: 50vw;
  max-height: 43rem;
  align-self: flex-end;
  z-index: -1;
  box-sizing: boder-box;
  @media (max-width: 1024px) {
    max-width: 40vw;
    max-height: 46rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Test02 = styled.div`
  @media (max-width: 768px) {
    align-items: center;
    text-align: right;
  }
`;

export const TextEnglish = styled.h1`
  color: #c12d18;
  font-weight: 700;
  font-size: 3rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.4rem;
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  @media (max-width: 700px) {
    font-size: 2rem;
    text-align: right;
  }
  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
  @media (max-width: 375px) {
    margin: 0rem 4%;
    font-size: 1.55rem;
  }
  @media (max-width: 320px) {
    font-size: 1.4rem;
  }
  @media (max-width: 280px) {
    font-size: 1rem;
  }
`;

export const TextPortugueseSpan = styled.span`
  color: #222222;
  font-size: 1.5rem;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 700px) {
    font-size: 0.75rem;
  }
`;

export const TextEnglishSmall = styled(TextEnglish)`
  font-size: 2.25rem;
  @media (max-width: 1024px) {
    font-size: 1.75rem;
  }
  @media (max-width: 700px) {
    font-size: 1.5rem;
    text-align: right;
  }
  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;

export const Footer = styled.footer`
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
  width: 100%;
  @media (min-width: 768px) {
    height: auto;
    flex-direction: row;
    /* position: absolute;
    bottom: 0; */
  }
  @media (min-width: 1024px) {
    height: 7rem;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const TextFooter = styled.p`
  color: #ffffff;
  text-align: right;
  font-size: 0.75rem;
  width: 33.813rem;
  padding-right: 2.188rem;
  border-right: 1px solid #ffffff;
  margin-left: 3%;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;
    margin: 0;
    margin-bottom: 10px;
    border-right: none;
    border-bottom: 1px solid #ffff;
    padding-bottom: 1rem;
    padding: 3% 0;
    font-size: 0.8rem;
  }
  @media (max-width: 425px) {
    font-size: 0.65rem;
  }
`;
