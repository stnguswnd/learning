import React from "react";
// 전역 상태를 변경하기 위해 필요한 두가지 모듈
// UseDispatch 훅
import { useDispatch } from "react-redux";
// 액션 생성자 함수
import { reset } from "../store/counterSlice";

export default function CounterReset() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(reset())}>리셋하기</button>
    </div>
  );
}
