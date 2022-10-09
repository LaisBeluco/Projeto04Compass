import React from "react";
import * as E from "./styled";
import * as Yup from "yup";
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  Formik,
  ErrorMessage,
} from "formik";

export default function Cadastro() {
  // const handleClickRegistro = ({values}: any) => console.log(values);

  return (
    <div className="container">
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          username: "",
          email: "",
          dob: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values))
        }}
      >
        {({handleSubmit}) => (
          <Form className="cadastro-form" onSubmit={handleSubmit}>
            <div className="cadastro-form-group">
              <Field
                name="name"
                className="form-fiel"
                placeHolder="Nome"
                type="name"
              />
              <ErrorMessage
                name="name"
                className="cadastro-error"
                component="span"
              />
            </div>
            <div className="cadastro-form-group">
              <Field
                name="lastName"
                className="form-fiel"
                placeHolder="Sobrenome"
              />
              <ErrorMessage
                name="lastName"
                className="cadastro-error"
                component="span"
              />
            </div>
            <button className="button" type="submit">
              Cadastro
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
