import styled from "styled-components";

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3%;
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
`;

export const TextTimerSeconds = styled.p`
  color: #ffffff;
  font-size: 0.875rem;
  width: 6.813rem;
  @media (max-width: 768px) {
  font-size: 0.75rem;
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
`;
