import styled from "styled-components";

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3%;
  @media (width: 700px){ 
    height: 50vh;
  }
`;

export const TextTimer = styled.p`
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-align: right;
  width: 6.813rem;
  @media (max-width: 768px) {
  font-size: 0.75rem;
  }
  @media (max-width: 425px) {
    width: 6rem;
    font-size: 0.70rem;
  }
`;

export const TextTimerSeconds = styled.p`
  color: #ffffff;
  font-size: 0.875rem;
  width: 6.813rem;
  @media (max-width: 768px) {
  font-size: 0.75rem;
  }
  @media (max-width: 425px) {
    font-size: 0.60rem;
  }
`;
export const CounterBlock = styled.div`
  text-align: center;
  color: #ffffff;
`;

export const Counter = styled.div`
  font-size: 3rem;
  font-weight: 700;
  @media (max-width: 768px) {
  font-size: 2.75rem;
  }
  @media (max-width: 425px) {
    font-size: 2.20rem;
  }
`;
