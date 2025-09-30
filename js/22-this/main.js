function func() {
  console.log("함수");
  console.log(this);
}
//func();

const obj = {
  name: "홍길동",
  age: 20,
  // 함수명이 없다 -> 함수 표현식
  // 속성의 key가 func이고
  func: function () {
    console.log(this); //이 함수를 실행한 객체를 보여줌.여기서 this는 유저 obj랑 같다.
  },
};

//obj.func();

const user = {
  name: "홍길동",
  age: 20,
  greet: function () {
    console.log(`Hello ${name}`);
  },
};

//화살표 함수로 표현한 메소드는 함수 선언식(표현식, function 키워드를 사용한 함수)와 작동 방식이 다르다.

const user2 = {
  name: "홍길동",
  age: 20,
  greet: () => {
    console.log(this);
  },
};

user2.greet(); // 화살표 함수로 표현한 메서드 결과 : {}

const user3 = {
  name: "홍길동",
  age: 20,
  greet: function () {
    const arrowFunc = () => {
      //function 내부에 있으면 this가 정상 작동된다. 화살표 함수의 this는 가장 가까운 부모의 function 함수의 this를 따라한다.
      console.log(this);
    };
    arrowFunc();
  },
};

//this가 상황에 따라 다르지~
user3.greet();
