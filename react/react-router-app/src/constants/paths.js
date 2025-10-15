// 경로 문자열을 관리 상수 객체
const PATHS = {
  //Root Layout의 중첩된 경로
  Root: {
    INDEX: "/",
    ABOUT: "/about",
    POSTS: "/posts",
    POST_DETAIL: "/posts/:postid",
    PROFILE: "/profile",
    getPostDetail: (postId) => `/posts/${postId}`,
  },
  AUTH: {
    INDEX: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
};

export default PATHS;
