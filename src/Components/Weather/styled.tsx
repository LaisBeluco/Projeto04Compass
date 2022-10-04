import styled from "styled-components";
import CompassWeader from "../../assets/CompassCloud.png";

export const Climate = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0 0 0;
  /* width: 6.563rem; */
  @media (max-width: 375px) {
    /* margin: 19px 0 0 0px; */
    margin: 25px 5% 0 0;
  }
`;

export const Location = styled.p`
  color: #222222;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: left;
  @media (width: 425px) {
    font-size: 0.8rem;
  }
  @media (max-width: 375px) {
    font-size: 0.76rem;
  }
`;

export const Temperature = styled.div`
  display: flex;
`;

export const IconClimate = styled.img`
  width: 30px;
  height: 30px;
  align-self: center;
  margin-right: 6%;
  @media (max-width: 375px) {
    width: 25px;
    height: 25px;
  }
`;

export const TemperaturaNumber = styled.div`
  color: #222222;
  font-weight: 700;
  font-size: 3rem;
  @media (max-width: 425px) {
    font-size: 2.5rem;
  }
  @media (width: 375px) {
    font-size: 2.25rem;
  }
  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;
