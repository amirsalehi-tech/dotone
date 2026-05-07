"use client";

import {useState, useRef} from "react";
import {Comment} from "../../types/post";

interface Props {
  comments: Comment[];
  onAddComment: (text: string) => void;
}

export default function CommentSection({comments, onAddComment}: Props) {
  const [expanded, setExpanded] = useState(false);
  const [localLikes, setLocalLikes] = useState<Record<string, number>>({});
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const value = formData.get("comment")?.toString().trim();
    if (!value) return;
    onAddComment(value);
    form.reset();
    setExpanded(true);
  };

  const handleLike = (id: string) => {
    setLocalLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleReply = (username: string) => {
    const el = inputRef.current;
    if (!el) return;
    el.value = `@${username} `;
    el.focus();
  };

  const visibleComments = expanded ? comments : comments.slice(0, 2);

  return (
    <div className="mt-3">
      <div className="space-y-2 mb-2">
        {visibleComments.map((c) => (
          <div key={c.id} className="text-sm">
            <div>
              <span className="font-semibold mr-1">{c.username}</span>
              <span>{c.content}</span>
            </div>

            <div className="flex gap-3 mt-1 text-xs text-gray-500">
              <button
                onClick={() => handleLike(c.id)}
                className="hover:text-red-500 transition"
              >
                ❤️ {localLikes[c.id] || 0}
              </button>

              <button
                onClick={() => handleReply(c.username)}
                className="hover:text-blue-600 transition"
              >
                💬 Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      {comments.length > 2 && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-xs text-blue-600 hover:underline mb-2"
        >
          {expanded ? "Show less" : `Show ${comments.length - 2} more comments`}
        </button>
      )}

      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          name="comment"
          placeholder="Post your reply"
          className="
            w-full px-3 py-2 text-sm rounded-full
            bg-gray-100
            border border-transparent
            focus:bg-white
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-500/40
            outline-none transition
          "
        />
        <p className="text-[11px] text-gray-500 mt-1 pl-3">
          Press Enter to reply
        </p>
      </form>
    </div>
  );
}
