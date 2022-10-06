import styled from "styled-components";

export const BlockLog = styled.div`
  background: #ffffff;
  text-align: center;
  height: 6.25rem;
  width: 8.188rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 7rem;
    width: 100%;
  }
  @media (max-width: 700px) {
    height: 3rem;
  }
`;
export const Nav = styled.a`
  text-decoration: none;
  align-items: center;
  color: #c13216;
  font-size: 0.75rem;
  cursor: pointer;
  @media (max-width: 700px) {
    font-weight: 700;
    /* width: 100%; */
  }
`;

export const LogOut = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.75rem;
  width: 8.188rem;
  color: #ffffff;
  @media (max-width: 700px) {
    padding-top: 1.25%;
  }
`;
export const ContainerLog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 3% 0;
    min-height: 120px;
    justify-content: space-around;
    width: 100%;
  }
`;
