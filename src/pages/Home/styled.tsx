import styled from "styled-components";
import LogoCompasso from "../../assets/LogoCompasso.svg";

export const Header = styled.header`
  display: flex;
  margin: 0 auto;
`;

export const Img = styled.div`
  background-image: url(${LogoCompasso});
  width: 9.375rem;
  height: 2.672rem;
`;
