"use client";

import Image from "next/image";
import {useState} from "react";
import Button from "../ui/button/Button";

interface Props {
  onPost: (content: string) => void;
}

const MAX_CHARS = 280;

export default function PostComposer({onPost}: Props) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onPost(text);
    setText("");
    const el = document.getElementById(
      "composer-textarea",
    ) as HTMLTextAreaElement | null;
    if (el) {
      el.style.height = "auto";
    }
  };

  return (
    <div className="flex gap-3 p-4 border-b border-gray-200 dark:border-gray-900 dark:bg-gray-800">
      <Image
        src="/images/p3.jpeg"
        alt="User avatar"
        width={40}
        height={40}
        className="w-20 h-20 rounded-full object-cover border-2 border-blue-600"
      />

      <div className="flex-1">
        <textarea
          id="composer-textarea"
          className="w-full resize-none outline-none text-lg bg-transparent placeholder:text-gray-500 overflow-hidden"
          placeholder="What is happening?!"
          maxLength={MAX_CHARS}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={1}
          onInput={(e) => {
            const el = e.currentTarget;
            el.style.height = "auto";
            el.style.height = el.scrollHeight + "px";
          }}
        />

        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-gray-500">
            {text.length}/{MAX_CHARS}
          </span>
          <Button
            disabled={!text.trim()}
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-1.5 rounded-full disabled:opacity-40 cursor-pointer"
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
