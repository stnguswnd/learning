import React from "react";

export default function LoginStatus({ isLogin, Username }) {
  return (
    <div>
      <h1>로그인 상태 : {isLogin ? "로그인" : "로그아웃"} </h1>
      <p>{isLogin ? `환영합니다! ${Username}님!` : "로그인 해주세요."}</p>
      <button>{isLogin ? "로그아웃" : "로그인"}</button>
    </div>
  );
}
