import React from "react";
import * as E from "./styled";
import { useState } from "react";
import { Button } from "../../Components/UI/index";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [NoValidated, setNoValidated] = useState(Boolean);

  const Input = () => {
    const [validadeInput, setValidateInput] = useState({
      case: false,
      number: false,
      length: false,
    });
    const secureText = (password: string) => {
      const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/);
      const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/);
      const regexNumber = new RegExp(/^(?=.*[0-9]).+$/);
      const length = password.length >= 6;

      setValidateInput({
        case: regexUppercase.test(password) && regexLowercase.test(password),
        number: regexNumber.test(password),
        length,
      });
    };
  };

  function sendForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let regEmail = /[^@\t\r\n]+@[^@\t\r\n]+\.[^@\t\r\n]+/;

    if (regEmail.test(email) && senha.length > 3) {
      navigate("/home");
      return setNoValidated(false);
    } else {
      return setNoValidated(true);
    }
  }

  return (
    <E.UserRegistration onSubmit={sendForm}>
      <E.ReistrationTexLogin>Login</E.ReistrationTexLogin>
      <div style={{ position: "relative" }}>
        <E.Input
          NoValidated={NoValidated}
          type="text"
          id="name"
          name="name"
          required
          placeholder="Nome"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        {/* <E.Icon user={true} transition={email} /> */}
      </div>
      <div style={{ position: "relative" }}>
        <E.Input
          NoValidated={NoValidated}
          type="text"
          id="last"
          name="last"
          required
          placeholder="Sobrenome"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        {/* <E.Icon user={true} transition={email} /> */}
      </div>
      <div style={{ position: "relative" }}>
        <E.Input
          NoValidated={NoValidated}
          type="text"
          id="email"
          name="email"
          required
          placeholder="Usuário"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {/* <E.Icon user={true} transition={email} /> */}
      </div>
      <div style={{ position: "relative" }}>
        <E.Input
          NoValidated={NoValidated}
          type="text"
          id="email"
          name="email"
          required
          placeholder="Usuário"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {/* <E.Icon user={true} transition={email} /> */}
      </div>
      <div style={{ position: "relative" }}>
        <E.Input
          NoValidated={NoValidated}
          type="password"
          id="senha"
          name="senha"
          required
          placeholder="Senha"
          value={senha}
          onChange={(event) => {
            setSenha(event.target.value);
          }}
        />
        {/* <E.Icon user={false} transition={senha} /> */}
      </div>
      <div style={{ position: "relative" }}>
        <E.Input
          NoValidated={NoValidated}
          type="password"
          id="senha"
          name="senha"
          required
          placeholder="Senha"
          value={senha}
          onChange={(event) => {
            setSenha(event.target.value);
          }}
        />
        {/* <E.Icon user={false} transition={senha} /> */}
      </div>
      {NoValidated ? (
        <E.MesageError>
          Ops, usuário ou senha inválidos. Tente novamente!
        </E.MesageError>
      ) : (
        <div></div>
      )}
      <Button>Cadastre-se</Button>
    </E.UserRegistration>
  );
}
