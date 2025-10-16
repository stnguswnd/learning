import { createSlice } from "@reduxjs/toolkit";

//초기 전역 상태
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1; //불변성 x, 상태를 직접 수정 
      //
    },
    incrementByAmount: (state, action) => {
      // 매개변수 action: 상태를 어떻게 변경할지 정보(무엇을, 어떻게, 얼마만큼 => payload)를 저장 
      state.count += Number(action.payload);
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

//액션 내보내기 
export const { increment, incrementByAmount, reset } = counterSlice.actions; //구조 분해 할당으로 내보내기임.
//export const increment = counterslice.actions.increment 
// export ~ 등등 

export default counterSlice.reducer;
