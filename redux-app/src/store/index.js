import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import authReducer from "./authSlice";
// Redux Persist 모듈
import { persistStore, persistReducer } from "redux-persist";
//로컬 스토리지
import storage from "redux-persist/lib/storage";

//Persist Reducer
//Persist Reducer 설정 변수
const authPersistConfig = {
  key: "auth", // 로컬 스토리지 내 속성명(식별자)
  storage: storage, //어떤 웹 저장소를 ㄹ사용할 것인가? -> 로컬 스토리지
  whitelist: ["token"], //어떤 상태를 저장할 것인가? token 상태만 저장 , 다른 error
};

//persistReducer : 지속 가능한 리듀서를 생성하는 함수  (설정, 원본 리듀서) 를 인자로 가진다.
const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
  },
  // middleware 속성 추가
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
