import {useState} from "react";

export function useCommentActions() {
  const [localLikes, setLocalLikes] = useState<Record<string, number>>({});
  const [replyTargetId, setReplyTargetId] = useState<string | null>(null);
  const [replyUsername, setReplyUsername] = useState<string | null>(null);

  const toggleLike = (id: string) => {
    setLocalLikes((prev) => ({
      ...prev,
      [id]: prev[id] ? prev[id] - 1 : 1,
    }));
  };

  return {
    localLikes,
    replyTargetId,
    replyUsername,
    setReplyTargetId,
    setReplyUsername,
    toggleLike,
  };
}
