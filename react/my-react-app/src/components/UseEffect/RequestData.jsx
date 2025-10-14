import React from "react";
import { useEffect, useState } from "react";

//무엇을 할꺼야?
//컴포넌트가 첫 렌더링될 때 DummyJSON으로 데이터를 요청(axios를 써서)
export default function RequestData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response["data"];
    }
  }, []);

  return <div>RequestData</div>;
}
