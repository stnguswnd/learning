import { useEffect, useState } from "react";

import { getPopularMovies } from "../../api/tmdb.js";
export default function MovieList() {
  // 리액트의 상태 : 화면을 결정한다. 화면에 보여질 데이터를 관리한다.
  //movies : 상태 변수, setMovies : 상태를 바꾸는 함수
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // 응답 객체에서 data 속성 불러와서 변수 data에 저장
      const res = await getPopularMovies();
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
