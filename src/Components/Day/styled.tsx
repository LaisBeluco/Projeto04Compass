import styled from "styled-components";

export const DateHour = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
  @media (max-width: 1024px) {
  }
`;

export const Hour = styled.p`

  font-size: 9rem;
  font-weight: 700;
  height: 9rem;
  @media (max-width: 1024px) {
  font-size: 6rem;
  height: 6.5rem;
  }
  @media (max-width: 768px) {
  display: none;
  }
`;

export const Date = styled.span`
font-weight: 400;
font-size: 0.875rem;
@media (max-width: 1024px) {
  font-size: 0.85rem;
  }
  @media (max-width: 768px) {
  display: none;
  }
`
