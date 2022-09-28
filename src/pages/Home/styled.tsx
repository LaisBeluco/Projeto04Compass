import styled from "styled-components";
import ballCompass from "../../assets/bolaCompass.svg";
import LogoCompasso from "../../assets/LogoCompasso.svg";

export const Back = styled.div`
  /* height: 100vh; */
`;

export const Header = styled.header`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.div`
  background-image: url(${LogoCompasso});
  width: 9.375rem;
  height: 2.672rem;
`;

export const Content = styled.div`
  margin: 0 5% 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImgCompass = styled.img`
  max-width: 600px;
  align-self: flex-end;
  margin-bottom: -5%;
  z-index: -1;
  max-height: 51.563rem;
  box-sizing: boder-box;
  width: 45vw;
`;
export const TextEnglish = styled.h1`
  color: #c12d18;
  font-weight: 700;
  font-size: 3rem;
  line-height: 5.07rem;
  text-align: right;
`;

export const TextPortuguese = styled.h2`
  color: #222222;
  font-size: 1.5rem;
  line-height: 1.875rem;
  text-align: right;
`;

export const Footer = styled.footer`
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  display: flex;
  align-items: center;
  justify-content: right;
  height: 6.25rem;
  width: 100%;
`;

export const TextFooter = styled.p`
  color: #ffffff;
  text-align: right;
  font-size: 0.75rem;
  width: 33.813rem;
  padding-right: 2.188rem;
  border-right: 1px solid #ffffff;
`;
