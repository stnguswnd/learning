import React, { use } from "react";
import { useEffect, useState } from "react";

export default function Basic() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    console.log("의존성 배열이 없는 useEffect");
  }, []);

  useEffect(() => {
    console.log("number가 변경될 때마다 실행");
  }, [number]);

  useEffect(() => {
    console.log("number2가 변경될 때마다 실행");
  }, [number2]);

  return (
    <div>
      {/* onClick 속성의 화살표 함수에서 setNumber(number +1) 실행 */}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {number}
      </button>
      <button>{number2}</button>
    </div>
  );
}
