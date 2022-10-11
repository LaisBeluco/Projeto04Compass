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
import { ContainerLogoMobile, ImgLogoMobile, ImgPc, Titulo, Welcome } from "../Login/styled";
import mask from "../../assets/mask.png";
import { ReistrationTexLogin } from "../Registration/styled";
import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import logoMobile from "../../assets/logoMobile.png";
import { Text } from "../Login/styled";

export default function Cadastro() {
  var userNow = auth.currentUser;
  const navigate = useNavigate();
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

      await updateProfile({ displayName: value.fullName });
      console.log(user.user.displayName);
      navigate("/");
    } catch {
      console.log("erro");
    }
  };

  interface FormModel {
    fullName: string;
    // lastname: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
  }

  const passwordRules =
    /(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/gm;
  return (
    <E.Fundo>
      <E.ContainerLogin>
        <ContainerLogoMobile>
          <ImgLogoMobile src={logoMobile} />
        </ContainerLogoMobile>
        <E.Cadastro>
          <Titulo>Olá,</Titulo>
          <Text>
            Para continuar navegando de forma segura, efetue o cadastro na rede.
          </Text>
          <E.ReistrationTexLogin>Cadastre-se</E.ReistrationTexLogin>
          <Formik<FormModel>
            validationSchema={object({
              fullName: yup.string().required("Campo obrigatório"),
              email: yup
                .string()
                .email("Por favor, coloque um e-mail válido")
                .required("Campo obrigatório"),
              password: yup
                .string()
                .min(6)
                .matches(passwordRules, {
                  message: "Por favor, crie uma senha mais forte",
                })
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
              fullName: "",
              email: "",
              confirmEmail: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values.fullName);
              register(values);
            }}
          >
            {({ handleSubmit, values, handleBlur, handleChange }) => (
              <form onSubmit={handleSubmit} className="cadastro-form">
                <E.ContainerInput>
                  <E.Input
                    NoValidated={NoValidated}
                    type="text"
                    name="fullName"
                    className="form-fiel"
                    placeholder="Nome"
                    value={values.fullName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name="fullName"
                    className="cadastro-error"
                    component="span"
                  />
                </E.ContainerInput>
                <E.ContainerInput>
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
                  <E.Input
                    NoValidated={NoValidated}
                    type="password"
                    name="confirmPassword"
                    className="form-fiel"
                    placeholder="Confirme sua Senha"
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
                  Cadastre-se
                </Button>
              </form>
            )}
          </Formik>
          <E.TextResgister>
            Caso possua cadastro, clique{" "}
            <E.LinkResgister href="http://localhost:3000">aqui</E.LinkResgister>
          </E.TextResgister>
        </E.Cadastro>
        <ImgPc src={mask} />
      </E.ContainerLogin>
    </E.Fundo>
  );
}
