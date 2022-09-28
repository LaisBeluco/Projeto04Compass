import React from "react";
import * as E from "./styled";

export default function Logout() {
  return (
    <>
      <E.ContainerLog>
        <E.BlockLog>
          <E.Nav>
            Continuar <br /> Navegando
          </E.Nav>
        </E.BlockLog>
        <E.LogOut>Logout</E.LogOut>
      </E.ContainerLog>
    </>
  );
}
