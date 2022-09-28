import styled from "styled-components"
import { AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";


interface ClickIcon {
  click: boolean
}

export const Icon = styled.div<ClickIcon>`
transition: 10s;
${(props) => props.click ? "transform: translate(-40px,0)" :"transform: translate()10px"};
`