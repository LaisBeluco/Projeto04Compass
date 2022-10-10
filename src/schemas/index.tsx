import * as yup from "yup";

const passwordRules = /(?=.*[}{,.^?~=+\-_\/*\-+.\|])(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/mg;

export const basicSchema = yup.object().shape({
  name: yup.string().min(2).required("Campo obrigatório"),
  lastname: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Por favor, coloque um e-mail valido").required("Campo obrigatório"),
  confirmEmail: yup.string().oneOf([yup.ref('email'), null], "Os e-mails tem que ser iguais").required("Campo obrigatório"),
  password: yup.string().min(6).matches(passwordRules, {message: "Por favor, crie uma senha mais forte"}).required("Campo obrigatório"),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], "As senhas tem que ser iguais").required("Campo obrigatório"),
})