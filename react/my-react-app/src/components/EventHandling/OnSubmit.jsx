import React from "react";

// submit 이벤트는 form 태그만 발생한다.
export default function onSubmit() {
  function handleSubmit(event) {
    const elements = event["target"]["elements"];
    const { email, password, name } = elements;

    console.log(`이메일 입력 값: ${email["value"]}`);
    console.log(`비밀번호 입력 값: ${password["value"]}`);
    console.log(`이름 입력 값: ${name["value"]}`);

    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" name="email" className="border-2" />
        <input type="password" name="password" className="border-2" />
        <button type="submit" value="제출" className="border-2">
          Submit
        </button>
      </form>
    </div>
  );
}
