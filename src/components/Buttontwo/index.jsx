import React from "react";
import * as C from "./styles";

export default function Buttontwo({ Text, onClick, Type = "button" }) {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  )
}
