import React from "react";
import LoginStatus from "./LoginStatus";
import AdminLink from "./AdminLink";

const users = [
  { isLogin: true, Username: "홍길동", isAdmin: true },
  { isLogin: false, Username: "김철수", isAdmin: false },
  { isLogin: true, Username: "짱구", isAdmin: true },
  { isLogin: true, Username: "선생님", isAdmin: false },
];

export default function () {
  return (
    <div>
      <LoginStatus isLogin={users[0].isLogin} Username={users[0].Username} />
      <AdminLink isAdmin={users[0].isAdmin} isLogin={users[0].isLogin} />
      <LoginStatus isLogin={false} Username={"김철수"} />
      <AdminLink isAdmin={false} isLogin={false} />

      {/*맵 합수로 뿌려주기*/}
      <hr></hr>

      {users.map((user, idx) => (
        <div>
          <LoginStatus isLogin={user.isLogin} Username={user.Username} />
        </div>
      ))}
    </div>
  );
}
