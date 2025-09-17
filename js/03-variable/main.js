//변수에 데이터를 할당(assing O, save X)
//변수명 = 할당할 데이터

//"Hello World" 데이터를 저장한 공간의 이름이 message
//변수 message에 "Hello World"를 할당
message = "Hello World";

// =: 할당 연산자
console.log(message);
console.log(message);
console.log(message);

// 변수명 = 데이터 순서를 잘 지킬 것!

//변수 message2 선언
//선언과 할당은 분리 가능
let message2;

//선언의 방식 2개(원래는 3개)
// let

//데이터 재할당 기능
//변수 message3에 "Hello variable"을 할당
let message3 = "Hello variable";

// 변수 message3에 "Hello let variable"을 재할당
message3 = "Hello let variable";

// let은 안붙이나요? -> let을 붙이면 선언
// let 키워드는 재선언은 불가능!!

//const
//데이터의 재할당이 불가능(중요) -> 상수 라고 개발에서는 표현
// const 변수 message5 선언하고, "Hello const" 할당

const message5 = "Hello const";
//message5 = "Hello World";

//let Vs const
//let : 변하는 데이터를 저장하는 변수 선언 방식
//const : 변하면 안되는 데이터를 저장하는 변수 선언 방식

//변수 이름 짓기 규칙!

//카멜 케이스 적용 전
let hellomessage;

//카멜 케이스 적용 후
let helloMessage;

//의미 없는 변수명
let a = 1;
//의미 있는 변수명
let number1 = 1;

// 템플릿 리터럴!! 문자간 더하기보다 이게 이득임.
//문사열 사이에 변수를 삽입해서 문자열을 생성하는 방법

// 1. 문자열을 백틱으로 표현
// 2. 변수 삽입 위치에 기호 ${ }를 사용!

let name = "김현중";
//let greet = `안녕하세요 ~ 입니다`;
let greet = `안녕하세요 ${name}입니다`;

console.log(greet);

//var
//재 선언도 가능하고, 재할당도 가능
var message7 = a;
var message7 = b;

//호이스팅 현상
//변수를 선언하기 전에 사용이 가능
var hoisting = "hello hoisting";


//