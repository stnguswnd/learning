import React from "react";

export default function RootLayout() {
  return (
    <div>
      <div className="flex gap-4">
        <link to="/">홈페이지</link>
        <link to="/about">소개 페이지</link>
        <link to="/profile">사용자 정보 페이지</link>
      </div>
    </div>
  );
}
