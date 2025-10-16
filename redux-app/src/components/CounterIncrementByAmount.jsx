import React from "react";

// 사용자에게 값을 입력받고, 입력 값만큼 전역상태 count 더하기

// 전역 상태를 변경하기 위해 필요한 두가지 모듈
// UseDispatch 훅
import { useDispatch } from "react-redux";
// 액션 생성자 함수
import { incrementByAmount } from "../store/counterSlice";
import { useState } from "react";

export default function CounterIncrementByAmount() {
  //dispatch 함수 생성
  const dispatch = useDispatch();

  const [payload, setpayload] = useState(0);

  return (
    // 사용자가 input에서 value에 넣은 값 만큼 payload를 증가 시킬 거다.
    <div>
      <input
        type="number"
        value={payload}
        onChange={(e) => setpayload(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(payload))}>증가</button>
    </div>
  );
}
