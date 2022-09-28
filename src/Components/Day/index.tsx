import React, { useState, useEffect } from "react";
import * as E from "./styled"

export function Day() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  },[]);
  return (
    <E.DateHour>
      <E.Hour>
        {""}
        {dateState.toLocaleString("pt-BR", {
          hour: "numeric",
          minute: "numeric",
        })}
      </E.Hour>
      <E.Date>
        {dateState.toLocaleString("pt-BR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </E.Date>
    </E.DateHour>
  );
}