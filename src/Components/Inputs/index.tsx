import React from "react";
import styled from "styled-components";
import { InputHTMLAttributes, useState} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  variant?:"user" | "password";
}

export default function Input({label, variant = "user", ...rest}: InputProps){

}
