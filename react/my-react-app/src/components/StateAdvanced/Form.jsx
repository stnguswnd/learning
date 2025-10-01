import React from "react";
import { useState } from "react";

export default function Form() {
  // 입력 요소의 값을 관리할 3개의 상태

  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  // event 객체 : 발생한 이벤트의 정보를 속성으로 저장한 객체
  function handleChange(event) {
    const target = event.target;
    //console.log(target);

    const { name, value } = target;
    console.log(name, value);

    //name에 따라 적절한 상태 변경 함수를 실행
    if (name === "username") {
      setUsername(value);

    } else if (name === "age") {
      setAge(value);
      
    } else if (name === "email") {
      setEmail(value);
    }
  }

  return (
    <div>
      {/*3개의 input 요소의 값을 상태로 관리 */}
      {/*  */}
      <input
        className="border-2"
        type="text"
        name="username"
        value={username}
        //화살표 함수의 매개변수 event를
        //handleChange 함수에 전달한다.
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <input
        className="border-2"
        type="text"
        name="age"
        value={age}
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <input
        className="border-2"
        type="text"
        name="email"
        value={email}
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
  );
}
