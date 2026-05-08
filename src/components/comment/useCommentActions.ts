import {useState} from "react";

export function useCommentActions() {
  const [localLikes, setLocalLikes] = useState<Record<string, number>>({});
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  const [replyTargetId, setReplyTargetId] = useState<string | null>(null);
  const [replyUsername, setReplyUsername] = useState<string | null>(null);

  const toggleLike = (id: string) => {
    setLikedComments((prevLiked) => {
      const nextLiked = new Set(prevLiked);
      const isLiked = nextLiked.has(id);

      setLocalLikes((prevLikes) => ({
        ...prevLikes,
        [id]: (prevLikes[id] ?? 0) + (isLiked ? -1 : 1),
      }));

      if (isLiked) nextLiked.delete(id);
      else nextLiked.add(id);

      return nextLiked;
    });
  };

  return {
    localLikes,
    likedComments,
    replyTargetId,
    replyUsername,
    setReplyTargetId,
    setReplyUsername,
    toggleLike,
  };
}
