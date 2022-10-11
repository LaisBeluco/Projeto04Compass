import React, { useState, useRef } from "react";
import * as E from "./styled";
import styled from "styled-components";
import { basicSchema } from "../../schemas";
import * as yup from "yup";
// import { useAuth } from "../../context/Auth/AuthContext";
import { Formik, ErrorMessage } from "formik";
import { object } from "yup";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import { auth } from "../../firebase";
import { Button } from "../../Components/UI";
import { ImgPc } from "../Login/styled";
import mask from "../../assets/mask.png";
import { ReistrationTexLogin } from "../Registration/styled";
import "./Cadastro.css";

export default function Cadastro() {
  var userNow = auth.currentUser;
  const [NoValidated, setNoValidated] = useState(Boolean);
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const register = async (value: any) => {
    console.log(value);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );

      await updateProfile({ displayName: value.registerName });
      console.log(user.user.displayName);
    } catch {
      console.log("erro");
    }
  };

  interface FormModel {
    registerName: string;
    lastname: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
  }

  // const passwordRules =
  //   /(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/gm;

  // .matches(passwordRules, {
  //   message: "Por favor, crie uma senha mais forte",
  // })

  return (
    <E.Fundo>
      <E.ContainerLogin>
        <E.Cadastro>
          <ReistrationTexLogin>Cadastre-se</ReistrationTexLogin>
          <Formik<FormModel>
            validationSchema={object({
              registerName: yup.string().required("Campo obrigatório"),
              lastname: yup.string().required("Campo obrigatório"),
              email: yup
                .string()
                .email("Por favor, coloque um e-mail válido")
                .required("Campo obrigatório"),
              confirmEmail: yup
                .string()
                .oneOf([yup.ref("email"), null], "Os e-mails devem ser iguais")
                .required("Campo obrigatório"),
              password: yup
                .string()
                .min(6)

                .required("Campo obrigatório"),
              confirmPassword: yup
                .string()
                .oneOf(
                  [yup.ref("password"), null],
                  "As senhas devem ser iguais"
                )
                .required("Campo obrigatório"),
            })}
            initialValues={{
              registerName: "",
              lastname: "",
              email: "",
              confirmEmail: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values.registerName);
              register(values);
            }}
          >
            {({ handleSubmit, values, handleBlur, handleChange }) => (
              <form onSubmit={handleSubmit} className="cadastro-form">
                <E.ContainerInput>
                  {/* <E.Label htmlFor="registerName">Nome:</E.Label> */}
                  <E.Input
                    NoValidated={NoValidated}
                    type="text"
                    name="registerName"
                    className="form-fiel"
                    placeholder="Nome"
                    value={values.registerName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />

                  <ErrorMessage
                    name="registerName"
                    className="cadastro-error"
                    component="span"
                  />
                </E.ContainerInput>
                <E.ContainerInput>
                  {/* <E.Label htmlFor="lastname">Sobrenome:</E.Label> */}
                  <E.Input
                    NoValidated={NoValidated}
                    type="text"
                    name="lastname"
                    className="form-fiel"
                    placeholder="Sobrenome"
                    value={values.lastname}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="lastname"
                    className="cadastro-error"
                    component="span"
                  />
                </E.ContainerInput>
                <E.ContainerInput>
                  {/* <E.Label htmlFor="email">E-mail:</E.Label> */}
                  <E.Input
                    NoValidated={NoValidated}
                    type="text"
                    name="email"
                    className="form-fiel"
                    placeholder="E-mail"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="email"
                    className="cadastro-error"
                    component="span"
                  />
                </E.ContainerInput>
                <E.ContainerInput>
                  {/* <E.Label htmlFor="confirmEmail">Confirme seu E-mail:</E.Label> */}
                  <E.Input
                    NoValidated={NoValidated}
                    type="text"
                    name="confirmEmail"
                    className="form-fiel"
                    placeholder="Confirme o E-mail"
                    value={values.confirmEmail}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="confirmEmail"
                    className="cadastro-error"
                    component="span"
                  />
                </E.ContainerInput>
                <E.ContainerInput>
                  {/* <E.Label htmlFor="password">Senha:</E.Label> */}
                  <E.Input
                    NoValidated={NoValidated}
                    type="password"
                    name="password"
                    className="form-fiel"
                    placeholder="Senha"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="password"
                    className="cadastro-error"
                    component="span"
                  />
                </E.ContainerInput>
                <E.ContainerInput>
                  {/* <E.Label htmlFor="confirmPassword">
                    Confirme sua Senha:
                  </E.Label> */}
                  <E.Input
                    NoValidated={NoValidated}
                    type="password"
                    name="confirmPassword"
                    className="form-fiel"
                    placeholder="Confirme a Senha"
                    value={values.confirmPassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    className="cadastro-error"
                    component="span"
                  />
                </E.ContainerInput>
                <Button className="button" type="submit">
                  Cadastro
                </Button>
              </form>
            )}
          </Formik>
          <E.TextResgister>Caso possua cadastro, clique <E.LinkResgister href="http://localhost:3000">aqui</E.LinkResgister></E.TextResgister>
        </E.Cadastro>
        <ImgPc src={mask} />
      </E.ContainerLogin>
    </E.Fundo>
  );
}
