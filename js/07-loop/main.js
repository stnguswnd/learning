// 반복문

/*
for (초기화; 조건식; 증감식) {  
  ///반복 실행할 코드 
  }

- 초기화 : 변수의 선언과 할당을 동시에 하면 초기화, 
  조건식에 사용할 변수를 초기화하는 영역, 
  초기화는 for 반복문 실행할 때 한 번만 실행
- 조건식 : 반복 실행 할 조건, 조건식 평가 결과가 true면 코드를 실행
  여러번 실행
- 증감식 : 초기화 영역에서 선언한 변수를 증감하는 영역

```;

``` 
반복문이 없는 코드
변수 number를 선언하고, 0을 할당
변수 number을 3번 출력 === 변수 number가 3미만 일 때 까지 
1씩 증가하면서
```;

*/
let number = 0;
console.log(number);
number = number + 1;

console.log(number);
number = number + 1;

console.log(number);
number = number + 1;

/*
for (초기화 let number2 = 0; 조건식; 증감문) {
  console.log(number2); // 반복 실행할 코드
}
  */

for (let number2 = 0; number2 < 3; number2 = number2 + 1) {
  console.log(number2);
}

//내가 어떤 코드를 N번 반복?

let N = 10;
for (let i = 0; i < N; i++) {
  console.log(`${i + 1}번 실행`);
}

// 숫자를 0부터 5까지 출력

for (let i = 0; i < 5; i++) {
  console.log(`시작 ${i}`);
}

//문제
// TODO: 0부터 4까지 숫자 출력하기
// for 반복문을 활용해서 0부터 4까지의 숫자를 출력한다

for (let i = 0; i < 5; i++) {
  console.log(i);
}

/* 출력 결과
0
1
2
3
4
*/

// TODO: 변수 N을 사용한 1부터 N까지 출력하기
// 변수 N에 6을 할당한다
// for 반복문을 활용해서 1부터 N까지의 숫자를 출력한다

N = 6;
for (let i = 1; i < N + 1; i++) {
  console.log(i);
}

/* 출력 결과
1
2
3
4
5
6
*/

// TODO: break로 5에서 반복 중단하기
// for 반복문을 활용해서 1부터 10까지 반복 출력하되, 5가 되면 break로 반복을 중단한다

for (let i = 1; i < 11; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

console.log("완료");

/* 출력 결과
1
2
3
4
5
*/

// TODO: continue로 3 건너뛰기
// for 반복문을 활용해서 1부터 6까지 반복 출력하되, 3일 때는 continue로 반복을 건너뛴다

for (let i = 1; i < 7; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

/* 출력 결과
1
2
4
5
6
*/
console.log("완료");

// TODO: 10부터 1까지 역순 출력하기
// for 반복문을 활용해서 10부터 1까지의 숫자를 역순으로 출력한다

for (let i = 10; i > 0; i--) {
  console.log(i);
}

/* 출력 결과
10
9
8
7
6
5
4
3
2
1
*/

// TODO: 변수로 범위 지정하여 출력하기
// 변수 start에 5, end에 10을 할당한다
// for 반복문을 활용해서 start부터 end까지의 숫자를 출력한다

console.log("완료");

let start = 5;
let end = 10;

for (let i = start; i <= end; i++) {
  console.log(i);
}

/* 출력 결과
5
6
7
8
9
10
*/

// TODO: 4의 배수에서 반복 중단하기
// for 반복문을 활용해서 1부터 20까지 반복 출력하되, 변수가 4의 배수가 되면 반복을 중단한다

/* 출력 결과
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
*/

// TODO: 홀수 건너뛰고 짝수만 출력하기
// for 반복문을 활용해서 1부터 10까지 반복 출력하되, 홀수일 때는 건너뛰고 짝수만 출력한다

for (let i = 1; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  } else {
    console.log(i);
  }
}

console.log("완료");
/* 출력 결과
2
4
6
8
10
*/

// TODO: 2의 배수만 출력하기
// for 반복문을 활용해서 1부터 16까지 반복 출력하면서 2의 배수만 출력한다

/* 출력 결과
2
4
6
8
10
12
14
16
*/
