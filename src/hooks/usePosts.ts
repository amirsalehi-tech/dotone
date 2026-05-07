import {useState} from "react";
import {v4 as uuid} from "uuid";

import {mockPosts} from "../data/mockPosts";
import {Post, Comment} from "../types/post";

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

  const insertReply = (
    comments: Comment[],
    parentId: string,
    newComment: Comment,
  ): Comment[] => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), newComment],
        };
      }

      if (comment.replies?.length) {
        return {
          ...comment,
          replies: insertReply(comment.replies, parentId, newComment),
        };
      }

      return comment;
    });
  };

  const addComment = (postId: string, text: string, parentId?: string) => {
    const newComment: Comment = {
      id: crypto.randomUUID(),
      username: "johndoe",
      content: text,
      replies: [],
    };

    setPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;

        if (!parentId) {
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }

        return {
          ...post,
          comments: insertReply(post.comments, parentId, newComment),
        };
      }),
    );
  };

  return {posts, addPost, toggleLike, addComment};
}
