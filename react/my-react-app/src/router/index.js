// src/router/index.js

import { createBrowserRouter } from "react-router-dom";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";

const router = createBrowserRouter([
  {
    path: "/posts",
    Component: PostList,
  },
  {
    path: "/posts/:postId",
    Component: PostDetail,
  },
]);

export default router;
