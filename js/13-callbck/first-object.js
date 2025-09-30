// 각 원소에 +1을 한 결과를 출력
const numbers4 = [1, 2, 3, 4, 5];

numbers4.forEach((element) => {
  //원소에 반복적으로 수행할 로직 작성
  console.log(element + 1);
});

//각 원소 중 2로 나눴을 떄 나머지가 0인 원소만 출력
numbers4.forEach((element) => {
  //배열의 원소에 반복적으로 수행할 로직 코드
  if (element % 2 === 0) {
    console.log(element);
  }
});

console.log("___");

//각 원소에 +1을 한 결과를 모아서

//빈 새로운 배열

const newArray = [];
numbers4.forEach((element) => {
  //새로운 배열에 +1을 저장
  newArray.push(element + 1);
});

console.log(newArray);

const newArray2 = numbers4.map((element) => {
  return element + 1;
});
console.log(newArray2);

//map을 사용해서 *2를 한 원소를 모아서 새 배열
const newArray3 = numbers4.map((element) => {
  return element * 2;
});
console.log(newArray3);

//sort()
//배열을 정렬하는 고차 메서드
//원소를 2개씩 비교 
//