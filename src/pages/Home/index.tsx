import React from "react";
import * as E from "./styled";
import Timer from "../../Components/Timer";
import Logout from "../../Components/Logout";
import { Day } from "../../Components/Day";
import ballCompass from "../../assets/bolaCompass.svg";
import Weader from "../../Components/Weather";
import LogoCompassTest from "../../assets/logoCompassTeste.svg";
import { auth } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  // const logout = async () => {
  //   const auth = getAuth();
  //   try {
  //     const logon = await signInWithEmailAndPassword(auth, );
  //     console.log(logon, " entrou");
  //     navigate("/home");
  //   } catch {
  //     console.log("erro");
  //     setNoValidated(true);
  //   }
  // };
  // const logout = async () => {
  //   const a = getAuth();
  //   const def = (() => {
  //     a.currentUser?.displayName;
  //   })
  //   console.log(def);
  // };
  return (
    <>
      <E.Test>
        <E.Back>
          <E.Header>
            <E.Img src={LogoCompassTest} />
            <Day />
            <Weader />
          </E.Header>
          <E.Content>
            <E.ImgCompass src={ballCompass} />
            <E.Test02>
              <E.TextEnglishSmall>
                Our mission is{" "}
                <E.TextPortugueseSpan>Nossa missão é</E.TextPortugueseSpan>{" "}
              </E.TextEnglishSmall>
              <E.TextEnglish>
                to transform the word{" "}
                <E.TextPortugueseSpan>transformar o mundo</E.TextPortugueseSpan>
              </E.TextEnglish>
              <E.TextEnglish>
                building digital experiences{" "}
                <E.TextPortugueseSpan>
                  construindo experiências digitais
                </E.TextPortugueseSpan>
              </E.TextEnglish>
              <E.TextEnglish>
                that enable our client’s growth{" "}
                <E.TextPortugueseSpan>
                  que permitam o crescimento dos nossos clientes
                </E.TextPortugueseSpan>
              </E.TextEnglish>
            </E.Test02>
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
      </E.Test>
    </>
  );
}

export default Home;
function setNoValidated(arg0: boolean) {
  throw new Error("Function not implemented.");
}
