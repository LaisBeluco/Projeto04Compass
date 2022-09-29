import React from "react";
import * as E from "./styled";
import Timer from "../../Components/Timer";
import Logout from "../../Components/Logout";
import { Day } from "../../Components/Day";
import ballCompass from "../../assets/bolaCompass.svg";
import Weader from "../../Components/Weather";

function Home() {
  return (
    <>
      <E.Back>
        <E.Header>
          <E.Img />
          <Day />
          <Weader />
        </E.Header>
        <E.Content>
          <E.ImgCompass src={ballCompass} />
          <div>
            <E.TextEnglishSmall>
              Our mission is <E.TextPortugueseSpan>Nossa missão é</E.TextPortugueseSpan>{" "}
            </E.TextEnglishSmall>
            <E.TextEnglish>to transform the word <E.TextPortugueseSpan>transformar o mundo</E.TextPortugueseSpan></E.TextEnglish>
            <E.TextEnglish>building digital experiences <E.TextPortugueseSpan>construindo experiências digitais</E.TextPortugueseSpan></E.TextEnglish>
            <E.TextEnglish>that enable our client’s growth <E.TextPortugueseSpan>que permitam o crescimento dos nossos clientes</E.TextPortugueseSpan></E.TextEnglish>
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
