import type {Notification} from "../types/notification";

export const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "like",
    text: "Alice liked JohnDoe's post",
    read: false,
    targetId: "post-1",
  },
  {
    id: 2,
    type: "reply",
    text: "Maria replied to a comment",
    read: false,
    targetId: "comment-c3",
  },
  {
    id: 3,
    type: "reply",
    text: "David replied in a thread",
    read: false,
    targetId: "reply-r7",
  },
  {
    id: 4,
    type: "follow",
    text: "Sophia started following you",
    read: true,
    targetId: "post-5",
  },
];
