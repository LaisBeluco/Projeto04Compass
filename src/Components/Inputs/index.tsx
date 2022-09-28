import React from "react";
import { InputHTMLAttributes, useState } from "react";
import * as E from "./styled"
import { AiOutlineUser } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { type } from "os";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: "user" | "password";
}

export default function Input({
  label,
  variant = "user",
  ...rest
}: InputProps) {
  const [click, setClickUser] = useState(false);
  const [pass, setPass] = useState("");

  return (
    <div>
      <Input
        label="clickUser"
        onFocus={() => setClickUser(true)}
        onBlur={(event) =>
          event.target.value.length > 0 ? setClickUser(true) : setClickUser(false)}
      />
      <E.Icon click={click}>
        {/* {type === name ? (<AiOutlineUser size={20}/>) : (<MdLockOutline size={20}/>)} */}
      </E.Icon>
    </div>
  );
}
