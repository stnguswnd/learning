let array4 = [1, 2, 3];
// For 반복문을 활용해서
// 0부터 배열 길이 -1 까지 반복
for (let index = 0; index <= array4.length - 1; index++) {
  // 코드 블럭
  // 위치번호와 함께 위치 번호에 해당하는 원소를 출력
  console.log(`${index} : ${array4[index]}`);
}

// For...of 반복문
// for (원소 of 배열){}
for (let element of array4) {
  console.log(element);
}
