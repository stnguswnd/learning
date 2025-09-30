import React from "react";

export default function OnChange() {
  // 이벤트 핸들러의 event 객체 : 이벤트 정보 저장한 객체
  function handleChange(event) {
    console.log(event);
    console.log(event["target"]["value"]);
  }

  function handleNumberChange(event) {
    if (event["target"]["value"] < 10) {
      console.log("10보다 작은 수");
    }
    //사용자 입력 값이 10보다 작으면
    // consol.log()를 사용해서 "10보다 작은 수" 라고 출력
  }
  return (
    <div>
      <input
        type="number"
        className="w-7xl"
        on
        onChange={(event) => {
          handleNumberChange(event);
        }}
      />
      <input
        type="text"
        className="w"
        // 이벤트 객체 evnet는 화살표 함수의 매개변수
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </div>
  );
}
