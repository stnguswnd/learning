import React from "react";
//상태 count + 1 시키는 액션 생성자 함수
//increment : 액션 생성자 함수 -> 액션을 생성한다.

import { increment } from "../store/counterSlice"; // 액션 함수
import { useDispatch } from "react-redux"; // dispatch 함수: 액션(action, 상태 변경 요청서)을 스토어로 보내는 함수!

export default function CounterIncrement() {
  const dispatch = useDispatch();

  function clickHandler() {
    //dispach 함수의 인자로 액션 생성자 함수를 전달
    const action = dispatch(increment());
    console.log(action);
  }

  return (
    <div>
      CounterIncrement
      <button onClick={clickHandler}>1 증가</button>
    </div>
  );
}
