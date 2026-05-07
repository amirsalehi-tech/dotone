"use client";

import {useState} from "react";
import {Comment} from "@/src/types/post";
import {renderTextWithMentions} from "@/src/utils/helpers";
import Button from "../ui/button/Button";

interface Props {
  comment: Comment;
  level?: number;
  localLikes: Record<string, number>;
  onLike: (id: string) => void;
  onReply: (id: string, username: string) => void;
}

export default function CommentItem({
  comment,
  level = 0,
  localLikes,
  onLike,
  onReply,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const replies = comment.replies ?? [];
  const hasReplies = replies.length > 0;

  const elementId =
    level === 0 ? `comment-${comment.id}` : `reply-${comment.id}`;

  return (
    <div
      id={elementId}
      className="mt-4 relative"
      style={{paddingLeft: level * 16}}
    >
      {/* Thread Line */}
      {level > 0 && (
        <div className="absolute left-0 top-0 h-full w-px bg-gray-300/40 dark:bg-gray-700/50" />
      )}

      {/* Body */}
      <div className="text-sm text-gray-800 dark:text-gray-200">
        <div>
          <span className="font-semibold text-gray-900 dark:text-white mr-1">
            {comment.username}
          </span>
          {renderTextWithMentions(comment.content)}
        </div>

        {/* Actions */}
        <div className="mt-2 flex gap-4 text-xs text-gray-500 dark:text-gray-400">
          <Button
            onClick={() => onLike(comment.id)}
            className="hover:text-red-500"
          >
            ❤️ {localLikes[comment.id] || 0}
          </Button>

          <Button
            onClick={() => onReply(comment.id, comment.username)}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Reply
          </Button>
        </div>
      </div>

      {/* Replies */}
      {hasReplies && (
        <>
          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${expanded ? "max-h-125 opacity-100 mt-3" : "max-h-0 opacity-0"}
            `}
          >
            {replies.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                level={level + 1}
                localLikes={localLikes}
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
