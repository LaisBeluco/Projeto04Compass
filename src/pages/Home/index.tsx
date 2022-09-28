import React from "react";
import * as E from "./styled";
import Timer from "../../Components/Timer";
import Logout from "../../Components/Logout";
import { Day } from "../../Components/Day";
import ballCompass from "../../assets/bolaCompass.svg";

function Home() {
  return (
    <>
      <E.Back>
        <E.Header>
          <E.Img />
          <Day />
        </E.Header>
        <E.Content>
          <E.ImgCompass src={ballCompass} />
          <div>
            <E.TextPortuguese>Nossa missão é</E.TextPortuguese>
            <E.TextEnglish>to transform the word</E.TextEnglish>
            <E.TextPortuguese>transformar o mundo</E.TextPortuguese>
            <E.TextEnglish>building digital experiences</E.TextEnglish>
            <E.TextPortuguese>
              construindo experiências digitais
            </E.TextPortuguese>
            <E.TextEnglish>that enable our client’s growth</E.TextEnglish>
            <E.TextPortuguese>
              que permitam o crescimento dos nossos clientes
            </E.TextPortuguese>
          </div>
        </E.Content>
      </E.Back>
      <E.Footer>
        <E.TextFooter>
          Essa janela do navegador é usada para manter sua sessão de
          autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova
          janela para continuar a navegar.
        </E.TextFooter>
        <Timer />
        <Logout />
      </E.Footer>
    </>
  );
}

export default Home;
