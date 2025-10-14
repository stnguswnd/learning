// TMDB API 요청 함수 관리 파일
// axios를 활용한 TMDB API 요청 함수 관리 파일
// 내보내는 파일

//별도의 파일 멸을 안쓰면 index.js를 찾긴 하지만 혼동이 오니까
import axiosInstance from "./index.js";

// 응답 데이터
//export : 모듈 내보내기
export async function getPopularMovies() {
  const config = {
    method: "GET",
    url: `/movie/popular`,
    params: {
      page: 1,
    },
  };
  const res = await axiosInstance(config);
  return res;
}
