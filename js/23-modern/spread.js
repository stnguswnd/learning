const obj1 = {
  name: "홍길동",
  age: 20,
  job: "개발자",
  location: "서울",
  country: "대한민국",
};

const obj2 = obj1;
console.log(obj1);
console.log(obj2);

obj2["location"] = "대구";

console.log(obj1);
console.log(obj2);

//... 스프레드 연산자를 활용한 복사
const obj3 = { ...obj1 };
console.log(obj3);

obj3["name"] = "고길동";

console.log(obj1);
console.log(obj3);

// 스프레드 연산자를 활용한 복사 
// 스프레드 연산자로 새로운 배열 