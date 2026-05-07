import {Post} from "../types/post";

export const mockPosts: Post[] = [
  {
    id: "1",
    username: "johndoe",
    avatar: "/images/p1.png",
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
    avatar: "/images/p2.jpg",
    content: "Loving this new mini social feed clone!",
    likes: 2,
    liked: false,
    comments: [],
  },
];
