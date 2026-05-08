"use client";

import {useEffect, useRef} from "react";

interface Props {
  onSubmit: (value: string) => void;
  replyUsername?: string | null;
}

export default function CommentInput({onSubmit, replyUsername}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (replyUsername && inputRef.current) {
      inputRef.current.value = `@${replyUsername} `;
      inputRef.current.focus();
    }
  }, [replyUsername]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = inputRef.current?.value.trim();
    if (!value) return;

    onSubmit(value);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleBlur = () => {
    if (!replyUsername && inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        onBlur={handleBlur}
        placeholder={replyUsername ? "Write your reply..." : "Post your reply"}
        className="w-full rounded-full bg-gray-100 dark:bg-gray-700 px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/40 outline-none"
      />

      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 pl-3">
        Press Enter to reply
      </p>
    </form>
  );
}
