import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";

import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";

//로그아웃 버튼
//만약에 로그인을 한 상태라면 사용자 정보를 출력
export default function Profile() {
  // dispatch 함수 생성
  const dispatch = useDispatch();

  //전역 상태 token
  const token = useSelector((state) => state.auth.token);

  const [decodeToken, setDecodeToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setDecodeToken(jwtDecode(token));
    } else {
      navigate("/login");
      //로그인 상태가 아니면 사용자를 다시 로그인 페이지로 보내기
    }
  }, [token]);
  console.log(decodeToken);

  const handleLogout = () => {
    dispatch(logout());
    alert("로그인 상태가 아닙니다. 로그인 페이지로 이동합니다.");
    // React Router를 사용한다면 다른 페이지로 이동시킬 수 있다
    // navigate("/login");
  };

  return (
    <div>
      <div>{token ? token : "로그인을 해주세요."}</div>;
      <div>
        {decodeToken ? `이메일: ${decodeToken.email}` : "로그인을 해주세요"}
      </div>
      <div>
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
