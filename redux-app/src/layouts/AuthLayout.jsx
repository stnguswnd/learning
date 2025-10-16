import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthLayout() {
  const token = useSelector((state) => state.auth.token);

  //토큰이 있으면 즉, 로그인을 했으면
  if (token) {
    //프로필 경로로 이동
    return <Navigate to="/profile"></Navigate>;
  } else {
    //중첩된 자식 컴포넌트 렌더링
    return <Outlet></Outlet>;
  }
}
