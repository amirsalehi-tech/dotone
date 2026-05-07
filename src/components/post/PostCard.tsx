"use client";

import {Post} from "@/src/types/post";
import Image from "next/image";
import CommentSection from "./CommentSection";

interface Props {
  post: Post;
  onLike: (id: string) => void;
  onComment: (postId: string, text: string) => void;
}

export default function PostCard({post, onLike, onComment}: Props) {
  return (
    <div className="flex gap-3 p-4 border-b hover:bg-gray-50 transition">
      <Image
        src={post.avatar}
        alt={post.username}
        width={80}
        height={80}
        className="w-20 h-20 rounded-full object-cover border-2 border-blue-600 sm:mb-0 sm:mr-6"
      />

      <div className="flex-1 max-w-full">
        <div className="font-semibold">{post.username}</div>

        <p className="mt-1 whitespace-pre-wrap wrap-break-words break-all w-full">
          {post.content}
        </p>

        <div className="flex gap-6 mt-2 text-gray-500 text-sm">
          <button
            className="hover:text-red-500 transition flex items-center gap-1"
            onClick={() => onLike(post.id)}
          >
            ❤️ <span>{post.likes}</span>
          </button>

          <div className="flex items-center gap-1">
            💬 <span>{post.comments.length}</span>
          </div>
        </div>

        <CommentSection
          comments={post.comments}
          onAddComment={(text) => onComment(post.id, text)}
        />
      </div>
    </div>
  );
}
