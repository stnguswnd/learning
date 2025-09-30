import React from "react";
import User from "./User";

export default function Container() {
  //배열 데이터
  const array = [1, 2, 3, 4, 5];
  // 객체 데이터
  const userArray = [
    { id: 1, name: "우영" },
    { id: 2, name: "길동" },
    { id: 3, name: "철수" },
    { id: 4, name: "짱구" },
    { id: 5, name: "영희" },
  ];

  return (
    <div>
      {array.map((element) => {
        //원소를 li 태그에 감싸서 반환(return)
        return <li>{element}</li>;
      })}

      {userArray.map((userElement) => {
        //유저 컴포넌트 import 필수
        //유저 컴포넌트에 유저 속성에 원소 user를 값으러 전달
        //반복 렌더링에서 key 속성의 역할은
        //동일하게 반복 생성된 컴포넌트를 구별(식별)하기 위한 속성
        return <User key={userElement["id"]} user={userElement}></User>;
      })}
    </div>
  );
}
