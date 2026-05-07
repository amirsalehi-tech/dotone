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
                {
                  id: uuid(),
                  username: "you",
                  content: text,
                  replies: [],
                },
              ],
            }
          : p,
      ),
    );
  };

  const addReply = (postId: string, commentId: string, text: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      replies: [
                        ...comment.replies,
                        {
                          id: uuid(),
                          username: "you",
                          content: text,
                        },
                      ],
                    }
                  : comment,
              ),
            }
          : post,
      ),
    );
  };

  return {posts, addPost, toggleLike, addComment, addReply};
}
