//논리 연산자

//논리형 ()

const trueData = true; //할당문(statement)
const falseData = false;

// && (AND)

// 2개의 논리형 데이터가 참이면, 참
//2개의 논리형 데이터가 거짓이면 거짓
// 1개라도 논리형 데이터가 거짓이면 false

//템플릿 리터럴에는 변수뿐만 아니라 표현식을 삽입 가능
//표현식 : 데이터를 생성하는 코드
console.log(`true && true -> ${trueData && trueData}`);

//false && true 출력(log)

console.log(`false && true -> ${falseData && trueData}`);

// || OR
// 1개의 논리형 데이터가 참이면 참(true) 생성
// 2개의 논리형 데이터가 거짓이면 거짓(false) 생성
console.log(`true||false -> ${trueData || falseData}`);
console.log(`false||false -> ${falseData || falseData}`);

// !(Not)
//1개의 논리형 데이터만 필요
//논리형 데이터가 거짓이면 참 생성
//논리형 데이터가 참이면 거짓 생성
console.log(`!true -> ${!trueData}`);
console.log(`!false -> ${!false}`);
