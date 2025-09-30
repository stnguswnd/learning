import React from "react";
import Child from "./Child";

export default function () {
  return (
    <div>
      <Child>
        <div>나는 길동</div>
      </Child>
      <Child>
        <h1>저는 ~입니다.</h1>
      </Child>
      <Child></Child>
    </div>
  );
}
