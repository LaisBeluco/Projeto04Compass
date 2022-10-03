import styled from "styled-components";
import LogoCompasso from "../../assets/LogoCompasso.svg";
import Temperatura from "../../assets/temperatura.png";
import ballCompass from "../../assets/bolaCompass.svg";

export const Back = styled.div`
  /* height: 100vh; */
`;
export const Test = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Img = styled.div`
  background-image: url(${LogoCompasso});
  background-repeat: no-repeat;
  margin: 25px 0 0 40px;
  width: 9.375rem;
  height: 2.672rem;
`;

export const ImgFixo = styled.div`
  background-image: url(${Temperatura});
  background-repeat: no-repeat;
  margin: 25px 40px 0 0;
  width: 9.375rem;
  height: 4.2rem;
`;

export const Content = styled.div`
  margin: 0 5% 0 0;
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    height: 80vh;
  }
  @media (max-width: 768px) {
   margin: 0 auto;
   justify-content: center;
   align-items: center;
   height: 75.5vh;
  }
  @media (max-width: 700px) {
   
   height: 50vh;
  }
`;

export const ImgCompass = styled.img`
  display: block;
  max-width: 50vw;
  max-height: 46rem;
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
   text-align: center;
  }
`;

// export const ImgCompass = styled.div`
// background-image: url(ballCompass);
// width: 40px;
// height: 40px;
// `;

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
  @media (max-width: 768px) {
   align-items: center;
   text-align: center;
  }
`;

export const TextPortugueseSpan = styled.span`
  color: #222222;
  font-size: 1.5rem;
  text-align: right;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
  }
`;

export const TextEnglishSmall = styled(TextEnglish)`
  font-size: 2.25rem;
  @media (max-width: 1024px) {
    font-size: 1.75rem;
  }
`;

export const Footer = styled.footer`
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.25rem;
  width: 100%;
  bottom: 0;
  left: 0;
  position: fixed;
  @media (max-width: 768px) {
    height: 7rem;
  }
  @media (max-width: 700px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
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
    font-size: 0.60rem;
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 45vw;
    border-right: none;
    border-bottom: 1px solid #ffff;
    padding-bottom: 1rem;
    padding: 3% 0;
  }
`;
