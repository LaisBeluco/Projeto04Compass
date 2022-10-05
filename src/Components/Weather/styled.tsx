import styled from "styled-components";
import CompassWeader from "../../assets/CompassCloud.png";

export const Climate = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 5% 0 0;
  @media (min-width: 375px) {
    margin: 25px 0 0 0;
  }
`;

export const Location = styled.p`
  color: #222222;
  font-size: 0.7rem;
  font-weight: 400;
  text-align: left;

  @media (min-width: 375px) {
    font-size: 0.875rem;
  }
  @media (min-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const Temperature = styled.div`
  display: flex;
`;

export const IconClimate = styled.img`
  width: 25px;
  height: 25px;
  align-self: center;
  margin-right: 6%;
  @media (min-width: 375px) {
    width: 30px;
    height: 30px;
  }
`;

export const TemperaturaNumber = styled.div`
  color: #222222;
  font-weight: 700;
  font-size: 1.95rem;

  @media (min-width: 375px) {
    font-size: 2.25rem;
  }
  @media (min-width: 425px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;
