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
  getAuth
} from "firebase/auth";
import { auth } from "../../firebase";

export default function Cadastro() {
  // const emailRef  = useRef()
  // const passwordRef = useRef()
  // const passwordConfirmRef = useRef()
  // const { signup }:any = useAuth();

  // function handleSubmit({ e }: any) {
  //   e.preventDefault();

  //   signup(emailRef.current.value, passwordRef.current.value);
  // }
  var userNow = auth.currentUser;

  // updateProfile(userNow, {displayName: "teste"})
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
    <div className="container">
      <Formik<FormModel>
        validationSchema={object({
          registerName: yup.string().min(2, "Too short").required("Required"),
          lastname: yup.string().required("Campo obrigatório"),
          email: yup
            .string()
            .email("Por favor, coloque um e-mail valido")
            .required("*"),
          confirmEmail: yup
            .string()
            .oneOf([yup.ref("email"), null], "Os e-mails tem que ser iguais")
            .required("*"),
          password: yup
            .string()
            .min(6)

            .required("*"),
          confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "As senhas tem que ser iguais")
            .required("*"),
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
            <div className="cadastro-form-group">
              <label htmlFor="registerName">Nome:</label>
              <input
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
            </div>
            <div className="cadastro-form-group">
              <label htmlFor="lastname">Sobrenome:</label>
              <input
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
            </div>
            <div className="cadastro-form-group">
              <label htmlFor="email">E-mail:</label>
              <input
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
            </div>
            <div className="cadastro-form-group">
              <label htmlFor="confirmEmail">Confirme seu E-mail:</label>
              <input
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
            </div>
            <div className="cadastro-form-group">
              <label htmlFor="password">Senha:</label>
              <input
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
            </div>
            <div className="cadastro-form-group">
              <label htmlFor="confirmPassword">Confirme sua Senha:</label>
              <input
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
            </div>
            <button className="button" type="submit">
              Cadastro
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
