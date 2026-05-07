import {useState} from "react";

import {v4 as uuid} from "uuid";
import {Post} from "../types/post";
import {mockPosts} from "../data/mockPosts";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const addPost = (content: string) => {
    const newPost: Post = {
      id: uuid(),
      username: "you",
      avatar: "/images/p3.jpeg",
      content,
      likes: 0,
      liked: false,
      comments: [],
    };

    setPosts((prev) => [newPost, ...prev]);
  };

  const toggleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              liked: !p.liked,
              likes: p.liked ? p.likes - 1 : p.likes + 1,
            }
          : p,
      ),
    );
  };

  const addComment = (postId: string, text: string) => {
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              comments: [
                ...p.comments,
                {id: uuid(), username: "you", content: text},
              ],
            }
          : p,
      ),
    );
  };

  return {posts, addPost, toggleLike, addComment};
}
