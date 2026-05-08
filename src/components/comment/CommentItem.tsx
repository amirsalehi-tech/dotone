"use client";

import {useState} from "react";
import {Heart, Reply} from "lucide-react";
import {Comment} from "@/src/types/post";
import {renderTextWithMentions} from "@/src/utils/helpers";
import Button from "../ui/button/Button";

interface Props {
  comment: Comment;
  level?: number;
  localLikes: Record<string, number>;
  likedComments: Set<string>;
  onLike: (id: string) => void;
  onReply: (id: string, username: string) => void;
}

export default function CommentItem({
  comment,
  level = 0,
  localLikes,
  likedComments,
  onLike,
  onReply,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [popId, setPopId] = useState<string | null>(null);

  const replies = comment.replies ?? [];
  const hasReplies = replies.length > 0;

  const elementId =
    level === 0 ? `comment-${comment.id}` : `reply-${comment.id}`;

  const liked = likedComments.has(comment.id);
  const baseLikes = typeof comment.likes === "number" ? comment.likes : 0;
  const likeCount = baseLikes + (liked ? 1 : 0);

  const handleLike = (id: string) => {
    onLike(id);
    setPopId(id);
    setTimeout(() => setPopId(null), 200);
  };

  return (
    <div
      id={elementId}
      className="mt-4 relative"
      style={{paddingLeft: level * 16}}
    >
      {level > 0 && (
        <div className="absolute left-0 top-0 h-full w-px bg-gray-300/40 dark:bg-gray-700/50" />
      )}

      <div className="text-sm text-gray-800 dark:text-gray-200">
        <div>
          <span className="font-semibold text-gray-900 dark:text-white mr-1">
            {comment.username}
          </span>
          {renderTextWithMentions(comment.content)}
        </div>

        <div className="mt-2 flex gap-4 text-xs text-gray-500 dark:text-gray-400">
          <Button
            onClick={() => handleLike(comment.id)}
            className="flex items-center gap-1 hover:text-red-500"
          >
            <Heart
              size={16}
              className={`
                transition-transform duration-200 ease-out
                ${liked ? "text-red-500" : ""}
                ${popId === comment.id ? "scale-125" : "scale-100"}
              `}
              fill={liked ? "currentColor" : "none"}
            />
            {likeCount}
          </Button>

          <Button
            onClick={() => onReply(comment.id, comment.username)}
            className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Reply size={16} />
            Reply
          </Button>
        </div>
      </div>

      {hasReplies && (
        <>
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${expanded ? "max-h-250 opacity-100 mt-3" : "max-h-0 opacity-0"}
            `}
          >
            {replies.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                level={level + 1}
                localLikes={localLikes}
                likedComments={likedComments}
                onLike={onLike}
                onReply={onReply}
              />
            ))}
          </div>

          <Button
            onClick={() => setExpanded((p) => !p)}
            className="mt-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
          >
            {expanded
              ? "Hide replies"
              : `Show ${replies.length} repl${
                  replies.length > 1 ? "ies" : "y"
                }`}
          </Button>
        </>
      )}
    </div>
  );
}
