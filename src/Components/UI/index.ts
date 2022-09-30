import React from "react";
import styled from "styled-components";
import { corPrimaria } from "./variaveis";

export const Button = styled.button`
  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);
  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
  filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5));
  border: none;
  border-radius: 50px;
  width: 23.688rem;
  height: 4.188rem;
  font-size: 1.125rem;
  color: ${corPrimaria};
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 360px) {
    width: 100%;
  }
  @media (max-width: 280px) {
    font-size: 1rem;
  }
`;
