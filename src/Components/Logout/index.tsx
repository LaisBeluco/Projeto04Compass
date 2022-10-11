import React from "react";
import * as E from "./styled";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const signOutClick = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <>
      <E.ContainerLog>
        <E.BlockLog>
          <E.Nav href="https://www.google.com.br/" target="_blank">
            Continuar <br /> Navegando
          </E.Nav>
        </E.BlockLog>
        <E.LogOut onClick={() => signOutClick()}>Logout</E.LogOut>
      </E.ContainerLog>
    </>
  );
}
