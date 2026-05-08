"use client";

import {Comment} from "@/src/types/post";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import {useCommentActions} from "./useCommentActions";
import Button from "../ui/button/Button";
import {useState} from "react";

interface Props {
  comments: Comment[];
  onAddComment: (text: string, parentId?: string) => void;
}

export default function CommentSection({comments, onAddComment}: Props) {
  const [expanded, setExpanded] = useState(false);

  const {
    localLikes,
    likedComments,
    replyTargetId,
    replyUsername,
    setReplyTargetId,
    setReplyUsername,
    toggleLike,
  } = useCommentActions();

  const visibleComments = expanded ? comments : comments.slice(0, 2);

  return (
    <div className="mt-4">
      <div className="space-y-4">
        {visibleComments.map((comment) => (
          <CommentItem
            likedComments={likedComments}
            key={comment.id}
            comment={comment}
            localLikes={localLikes}
            onLike={toggleLike}
            onReply={(id, username) => {
              setReplyTargetId(id);
              setReplyUsername(username);
            }}
          />
        ))}
      </div>

      {comments.length > 2 && (
        <Button
          onClick={() => setExpanded((p) => !p)}
          className="mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
        >
          {expanded ? "Show less" : `Show ${comments.length - 2} more comments`}
        </Button>
      )}

      <div className="mt-4">
        <CommentInput
          replyUsername={replyUsername}
          onSubmit={(value) => {
            onAddComment(value, replyTargetId || undefined);
            setReplyTargetId(null);
            setReplyUsername(null);
          }}
        />
      </div>
    </div>
  );
}
