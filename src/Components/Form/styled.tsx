import styled from "styled-components";
import iconPass from "../../assets/icon-password.png";
import iconUser from "../../assets/icon-user.png";

interface IconI {
  user: boolean;
  transition: string;
}

export const MesageError = styled.span`
  color: #e9b425;
  font-weight: 700;
  font-size: 1rem;
  width: 17.688rem;
  text-align: center;
  align-self: center;
`;

export const Icon = styled.i<IconI>`
  margin-left: ${({ transition }: any) => (transition ? "-40px" : "20px")};
  background-image: url(${({ user }: any) => (user ? iconUser : iconPass)});
  background-repeat: no-repeat;
  position: absolute;
  transition: 1s;
  top: 15px;
  width: 20px;
  height: 25px;
`;