import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Mark';
  @font-face {
    font-family: 'Mark';
    src: url('Mark-Pro.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  body, html{
  height: 100%;
}
}
`;
