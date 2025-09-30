import React from "react";

export default function AdminLink({ isAdmin, isLogin }) {
  return (
    <div>{isLogin && <p>현재 권한 :{isAdmin ? "관리자" : "사용자"} </p>}</div>
  );
}
