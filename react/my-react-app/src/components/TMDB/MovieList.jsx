import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieList() {
  // 리액트의 상태 : 화면을 결정한다. 화면에 보여질 데이터를 관리한다.
  //movies : 상태 변수, setMovies : 상태를 바꾸는 함수
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",

        // 2번 영화의 상세 정보를 호출하는 정보 API를 사용하는 주소(URL)
        url: `${BASE_URL}/movie/popular`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "ko-KR",
        },
      };
      // 응답 객체에서 data 속성 불러와서 변수 data에 저장
      const res = await axios(config);
      console.log(res);
      setMovies(res["data"]["results"]);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>인기 영화 목록</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
