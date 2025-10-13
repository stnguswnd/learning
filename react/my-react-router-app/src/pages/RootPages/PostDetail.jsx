import React, { use, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams();
  useEffect(() => {
    //postId를 활용해서
    // Get a single product API를 요청 후 화면에 게시글 상세 정보 렌더링
    console.log(postId);
  }, [postId]);
  return <div>PostDetail</div>;
}
