// src/router/index.js

// createBrowserRouter 함수 불러오기
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/RootPages/Home";
import About from "../pages/RootPages/About";
import PostList from "../pages/RootPages/PostList";
import PostDetail from "../pages/RootPages/PostDetail";

// 라우터 생성
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  // "/profile" 경로 추가
  {
    path: "/posts",
    Component: PostList,
  },
  {
    path: "/posts/:postId",
    Component: PostDetail,
  },
]);

// 라우터 내보내기
export default router;
