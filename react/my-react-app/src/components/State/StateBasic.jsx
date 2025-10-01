import React from "react";
import { useState } from "react";

export default function StateBasic() {
  const [string, setString] = useState("문자열");

  function handleClick() {
    const newArray = [...Array, 4];

    setArray(newArray);

    console.log("상태변경");
  }
  return <div>StateBasic</div>;
}
