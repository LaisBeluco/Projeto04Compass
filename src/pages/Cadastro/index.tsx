import React, { useState } from "react";
import * as E from "./styled";
import styled from "styled-components";
import { basicSchema } from "../../schemas";
import * as yup from "yup";

import {
  Formik,
  ErrorMessage,
} from "formik";
import { object } from "yup";

export default function Cadastro() {

  interface FormModel {
    name: string;
    lastname: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
  }
  const passwordRules =
    /(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/gm;

  return (
    <div className="container">
      <Formik<FormModel>
        validationSchema={object({
          name: yup.string().min(2).required("Campo obrigatório"),
          lastname: yup.string().required("Campo obrigatório"),
          email: yup
            .string()
            .email("Por favor, coloque um e-mail valido")
            .required("Campo obrigatório"),
          confirmEmail: yup
            .string()
            .oneOf([yup.ref("email"), null], "Os e-mails tem que ser iguais")
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
            .oneOf([yup.ref("password"), null], "As senhas tem que ser iguais")
            .required("Campo obrigatório"),
        })}
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          confirmEmail: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {({ handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit} className="cadastro-form">
            <div className="cadastro-form-group">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                name="name"
                className="form-fiel"
                placeholder="Nome"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage
                name="name"
                className="cadastro-error"
                component="span"
              />
            </div>
            <div className="cadastro-form-group">
              <input
                type="text"
                name="lastname"
                className="form-fiel"
                placeholder="Sobrenome"
                value={values.lastname}
                onChange={handleChange}
              />
              <ErrorMessage
                name="lastname"
                className="cadastro-error"
                component="span"
              />
            </div>
            <div className="cadastro-form-group">
              <input
                type="text"
                name="email"
                className="form-fiel"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage
                name="email"
                className="cadastro-error"
                component="span"
              />
            </div>
            <div className="cadastro-form-group">
              <input
                type="text"
                name="confirmEmail"
                className="form-fiel"
                placeholder="Confirme o E-mail"
                value={values.confirmEmail}
                onChange={handleChange}
              />
              <ErrorMessage
                name="confirmEmail"
                className="cadastro-error"
                component="span"
              />
            </div>
            <div className="cadastro-form-group">
              <input
                type="password"
                name="password"
                className="form-fiel"
                placeholder="Senha"
                value={values.password}
                onChange={handleChange}
              />
              <ErrorMessage
                name="password"
                className="cadastro-error"
                component="span"
              />
            </div>
            <div className="cadastro-form-group">
              <input
                type="password"
                name="confirmPassword"
                className="form-fiel"
                placeholder="Confirme a Senha"
                value={values.confirmPassword}
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
