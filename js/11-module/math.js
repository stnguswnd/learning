//외부 파일(모듈)로 분리할 코드
function add(n1, n2) {
  return n1 + n2;
}
//빼기
//substract

function substract(n1, n2) {
  return n1 - n2;
}
//곱하기
// multiply

function multiply(n1, n2) {
  return n1 * n2;
}

//나누기
function devide(n1, n2) {
  return n1 / n2;
}

//각 함수를 만들고, 내보내기 및 불러오기

export { add, substract, multiply, devide };
