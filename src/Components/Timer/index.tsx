import React from "react";
import * as E from "./styled";

export default function Timer() {
  return (
    <E.Timer>
      <E.TextTimer>Application refresh in</E.TextTimer>
      <E.CounterBlock>
        <E.Counter>60</E.Counter>
        <E.TextTimerSeconds>seconds</E.TextTimerSeconds>
      </E.CounterBlock>
    </E.Timer>
  );
}
