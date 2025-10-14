import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await axios.get("https://dummyjson.com/posts");
      setPosts(response.data.posts);
    }
    getPosts();
  }, []);

  return (
    <div>
      <div className="flex gap-2">
        <button className="border-2 p-2 cursor-pointer">ID 오름차순</button>
        <button>ID 내림차순</button>
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
