import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as E from "./styled";


export default function Timer() {
  const navigate = useNavigate();

  const [totalTimeInsoconds, setTimeInsoconds] = useState(600);
  const seconds = totalTimeInsoconds;

  useEffect(() => {
    if (totalTimeInsoconds === 0) {
      navigate("/");
      return;
    }
    setTimeout(() => {
      setTimeInsoconds(totalTimeInsoconds - 1);
    }, 1000);
  }, [totalTimeInsoconds]);

  return (
    <E.Timer>
      <E.TextTimer>Application refresh in</E.TextTimer>
      <E.CounterBlock>
        <E.Counter>{seconds.toString().padStart(2, "0")}</E.Counter>
        <E.TextTimerSeconds>seconds</E.TextTimerSeconds>
      </E.CounterBlock>
    </E.Timer>
  );
}
