import {Post} from "../types/post";

export const mockPosts: Post[] = [
  {
    id: "1",
    username: "johndoe",
    avatar: "https://i.pravatar.cc/40?img=1",
    content: "Hello everyone! This is my first post 🚀",
    likes: 4,
    liked: false,
    comments: [
      {
        id: "c1",
        username: "alice",
        content: "Welcome aboard!",
      },
    ],
  },
  {
    id: "2",
    username: "maria",
    avatar: "https://i.pravatar.cc/40?img=3",
    content: "Loving this new mini social feed clone!",
    likes: 2,
    liked: false,
    comments: [],
  },
];
