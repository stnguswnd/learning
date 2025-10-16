import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Counter() {
  // state.counter.count : 전역 상태의 counter 슬라이스의 count 상태를 조회
  const count = useSelector((state) => state.counter.count);

  useEffect(() => {
    console.log(count);
  }, []);

  return <div>전역 상태 Count: {count} </div>;
}
