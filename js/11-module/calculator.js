//객체란 중괄호로 표현되는 소것ㅇ의 모음
const calObject = {
  //add 함수
  add: function (n1, n2) {
    return n1 + n2;
  },

  //substract 함수
  substract: function (n1, n2) {
    return n1 - n2;
  },

  multiply: function (n1, n2) {
    return n1 * n2;
  },

  // multiply 화살표 함수
  multiplyArrow: (n1, n2) => {
    return n1 * n2;
  },
};
//하나만 내보내기(Default Export) 코드 작성

export default calObject;
