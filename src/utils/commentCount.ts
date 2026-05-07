import {Comment} from "../types/post";

export function countComments(comments: Comment[]): number {
  return comments.reduce((total, comment) => {
    return total + 1 + countComments(comment.replies || []);
  }, 0);
}
