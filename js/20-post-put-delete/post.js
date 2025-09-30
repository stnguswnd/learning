import axios from "axios";

async function postProduct(config) {
  const response = await axios(config);
  console.log("추가된 상품:", response["data"]);
}




const config = {
  method: "post", // HTTP 메서드/

  url: `https://dummyjson.com/products/add`, // 요청 API 주소

  headers: { "Content-Type": "application/json" }, // 요청 헤더: 요청의 부가 정보
  // "Content-Type": "application/json" : 요청 본문(body)의 데이터 형식
  data: {
    title: "갤럭시 S99",
    price: 9999999,
    // 그 밖의 상품의 정보: category, description, stock, brand, ...
  }, // 요청 본문(Body)에 담을 데이터
};
postProduct(config);
