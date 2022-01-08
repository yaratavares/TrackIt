import { useState } from "react";
import { Check } from "./style";
import check from "../../../assets/check.png";

export default function CheckHabits() {
  const [checkOrUncheck, setCheckOrUncheck] = useState("check");

  return (
    <Check
      checkOrUnchek={checkOrUncheck}
      onClick={() => {
        console.log("cliquei");
        setCheckOrUncheck("check");
      }}
    >
      <img src={check} alt="check"></img>
    </Check>
  );
}
