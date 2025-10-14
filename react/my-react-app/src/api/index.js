import React from "react";
import axios from "axios";

const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

// create(): axios 객체 데이터를 생성
// 객체 : 속성(key - value) 구성된 자료형

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
  params: {
    language: "ko-KR",
  },
  timeout: 5000, //5초 내로 이루어지지 않으면 오류를 일으켜 낸다.
});

export default axiosInstance;
