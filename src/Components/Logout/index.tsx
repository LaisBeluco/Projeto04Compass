import React from "react";
import * as E from "./styled";

export default function Logout() {
  return (
    <>
      <E.ContainerLog>
        <E.BlockLog>
          <E.Nav href="https://www.google.com.br/" target="_blank">
            Continuar <br /> Navegando
          </E.Nav>
        </E.BlockLog>
        <E.LogOut href="http://localhost:3000/">Logout</E.LogOut>
      </E.ContainerLog>
    </>
  );
}
