import styled from "styled-components";
import CompassWeader from "../../assets/CompassCloud.png";

export const Climate = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 40px 0 0;
`;

export const Location = styled.p`
  color: #222222;
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
`;

export const Temperature = styled.div`
  display: flex;
`;

export const IconClimate = styled.i`
  background-image: url(${CompassWeader});
  width: 34px;
  height: 34px;
  align-self: center;
`;

export const TemperaturaNumber = styled.div`
  color: #222222;
  font-weight: 700;
  font-size: 3rem;
`;
