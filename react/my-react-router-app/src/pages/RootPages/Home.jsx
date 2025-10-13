import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <Link to="/about">소개 페이지로 이동</Link>
    </div>
  );
}
