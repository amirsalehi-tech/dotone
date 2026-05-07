import React from "react";

const mentionRegex = /(@[a-zA-Z0-9_]+)/g;

export function renderTextWithMentions(text: string): React.ReactNode[] {
  return text.split(mentionRegex).map((part, index) => {
    if (mentionRegex.test(part)) {
      return (
        <span
          key={index}
          className="text-blue-500 font-medium cursor-pointer hover:underline"
        >
          {part}
        </span>
      );
    }

    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}
