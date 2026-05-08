"use client";

import {Post} from "@/src/types/post";
import Image from "next/image";
import CommentSection from "../comment";
import {renderTextWithMentions} from "@/src/utils/helpers";
import {countComments} from "@/src/utils/commentCount";
import Button from "../ui/button/Button";
import {useState} from "react";
import {Heart, MessageCircle} from "lucide-react";

interface Props {
  post: Post;
  onLike: (id: string) => void;
  onComment: (postId: string, text: string, parentId?: string) => void;
}

export default function PostCard({post, onLike, onComment}: Props) {
  const [animating, setAnimating] = useState(false);

  const handleLike = () => {
    setAnimating(true);
    onLike(post.id);
    setTimeout(() => setAnimating(false), 200);
  };

  return (
    <div
      id={`post-${post.id}`}
      className="flex gap-3 p-4 border-b border-gray-200 dark:border-gray-700 transition dark:bg-gray-800"
    >
      <Image
        src={post.avatar}
        alt={post.username}
        width={80}
        height={80}
        className="w-20 h-20 rounded-full object-cover border-2 border-blue-600"
      />

      <div className="flex-1 min-w-0 max-w-full">
        <div className="font-semibold">{post.username}</div>

        <p className="mt-1 whitespace-pre-wrap wrap-break-word">
          {renderTextWithMentions(post.content)}
        </p>

        <div className="flex gap-6 mt-3 text-gray-500 text-sm items-center">
          {/* Like */}
          <Button
            className="flex items-center gap-1 hover:text-red-500 transition"
            onClick={handleLike}
          >
            <Heart
              size={18}
              className={`
                transition-all
                ${post.liked ? "fill-red-500 text-red-500" : ""}
                ${animating ? "scale-125" : "scale-100"}
              `}
            />
            <span>{post.likes}</span>
          </Button>

          {/* Comments */}
          <div className="flex items-center gap-1">
            <MessageCircle size={18} />
            <span>{countComments(post.comments)}</span>
          </div>
        </div>

        <CommentSection
          comments={post.comments}
          onAddComment={(text, parentId) => onComment(post.id, text, parentId)}
        />
      </div>
    </div>
  );
}
