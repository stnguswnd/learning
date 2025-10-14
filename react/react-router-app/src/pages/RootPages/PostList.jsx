import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useSearchParams } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  //상태(State)로 요청 주소를 변경하는 것과
  // 쿼리파라미터로 API 요청 주소를 관리하는 것의 차이는?

  //serchParams : 쿼리 파라미터 값을 가진 객체
  //setSearchParams : 쿼리 파라미터를 변경할 수 있는 함수
  const [searchParams, setSearchParams] = useSearchParams();

  //useEffect 의존성 배열의 역할
  //useEffect 콜백 함수를 언제 실행할 것이냐를 결정
  //의존성 배열이 빈 배열이면 컴포넌트가 첫 렌더링 될 때만 실행
  //의존성 배열에 데이터가 있으면 해당 데이터가 변경될 때 마다 콜백 함수 실행

  useEffect(() => {
    // 쿼리 파라미터에서 key가 order인 값을 불러오기
    const order = searchParams.get("order") ?? "asc"; //nulllish 연산자를 통해 기본값을 지정, 즉 기존에 지정을 안하더라도 id와 오름차순으로 정렬하겠다!
    const sortBy = searchParams.get("sortBy") ?? "id"; //정렬이 아닐수도 있음!

    async function getPosts() {
      const response = await axios.get(
        `https://dummyjson.com/posts?sortBy=${sortBy}&order=${order}`
      );
      setPosts(response.data.posts);
    }
    getPosts();
  }, [searchParams]);
  //의존성 배열에 serchParamse를 넣어서
  //쿼리 파라미터가 변경되면 useEffect 콜백 함수를 실행한다.
  //쿼리 파리미터가 변경된다 -> setSearchParams() 실행

  return (
    <div>
      <div className="flex gap-2">
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "asc" });
          }}
        >
          ID 오름차순
        </button>
        <button
          className="border-2 p-2 cursor-pointer"
          onClick={() => {
            setSearchParams({ sortBy: "id", order: "desc" });
          }}
        >
          ID 내림차순
        </button>
      </div>

      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              No. {post.id} - {post.title}
            </Link>
            <br />
          </div>
        );
      })}
    </div>
  );
}
