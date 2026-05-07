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
        replies: [
          {
            id: "r1",
            username: "johndoe",
            content: "Thanks Alice! Glad to be here 🙌",
          },
        ],
      },
      {
        id: "c2",
        username: "maria",
        content: "Nice to see you here! Looking forward to your posts.",
        replies: [],
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
    comments: [
      {
        id: "c3",
        username: "johndoe",
        content: "Same here, the UI is getting better and better.",
        replies: [
          {
            id: "r2",
            username: "maria",
            content: "Yes! I’m trying to make it feel more polished.",
          },
          {
            id: "r3",
            username: "alice",
            content: "The spacing improvements really help.",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    username: "alice",
    avatar: "/images/p2.jpg",
    content:
      "Small UI details make such a huge difference. Hover states, spacing, and typography can completely change how professional an app feels.",
    likes: 12,
    liked: true,
    comments: [
      {
        id: "c4",
        username: "maria",
        content: "Totally agree. Even subtle transitions help a lot.",
        replies: [
          {
            id: "r4",
            username: "alice",
            content: "Exactly — not too much, just enough to feel smooth.",
          },
        ],
      },
      {
        id: "c5",
        username: "david",
        content: "Good typography is underrated.",
        replies: [],
      },
    ],
  },
  {
    id: "4",
    username: "david",
    avatar: "/images/p2.jpg",
    content:
      "Just finished building a comment section with replies, likes, and show more/show less. Feels much cleaner now.",
    likes: 7,
    liked: false,
    comments: [
      {
        id: "c6",
        username: "johndoe",
        content: "That’s awesome. Did you add nested replies too?",
        replies: [
          {
            id: "r5",
            username: "david",
            content: "Yes, one level of nesting for now.",
          },
          {
            id: "r6",
            username: "maria",
            content: "That’s probably the right balance for this project.",
          },
        ],
      },
      {
        id: "c7",
        username: "alice",
        content: "Would love to see the final UI.",
        replies: [
          {
            id: "r7",
            username: "david",
            content: "I’ll share a screenshot soon 👀",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    username: "sophia",
    avatar: "/images/p2.jpg",
    content:
      "Trying out a few lucide-react icons for the header. Bell, Search, and SquarePen seem like the best combination so far.",
    likes: 18,
    liked: true,
    comments: [
      {
        id: "c8",
        username: "alice",
        content: "Bell is definitely the safest choice.",
        replies: [],
      },
      {
        id: "c9",
        username: "maria",
        content: "Search also helps balance the header visually.",
        replies: [
          {
            id: "r8",
            username: "sophia",
            content: "Yes, and it gives room for future features too.",
          },
        ],
      },
      {
        id: "c10",
        username: "david",
        content: "SquarePen is a nice touch if you want quick compose access.",
        replies: [],
      },
    ],
  },
  {
    id: "6",
    username: "noah",
    avatar: "/images/p2.jpg",
    content:
      "What do you think matters more in frontend interviews: architecture, polish, or attention to detail?",
    likes: 9,
    liked: false,
    comments: [
      {
        id: "c11",
        username: "johndoe",
        content: "Probably all three, but polish helps you stand out fast.",
        replies: [
          {
            id: "r9",
            username: "noah",
            content: "That’s true — first impressions matter a lot.",
          },
        ],
      },
      {
        id: "c12",
        username: "alice",
        content: "Good architecture first, then polish on top.",
        replies: [
          {
            id: "r10",
            username: "maria",
            content: "I’d say a balanced project wins every time.",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    username: "emma",
    avatar: "/images/p2.jpg",
    content:
      "Added autosize to the composer textarea and finally fixed the reset height bug after posting 🎉",
    likes: 14,
    liked: true,
    comments: [
      {
        id: "c13",
        username: "david",
        content: "That bug is always more annoying than it looks.",
        replies: [
          {
            id: "r11",
            username: "emma",
            content: "Seriously, took longer than expected 😅",
          },
        ],
      },
      {
        id: "c14",
        username: "sophia",
        content: "Worth it though — smooth textarea behavior feels premium.",
        replies: [],
      },
    ],
  },
  {
    id: "8",
    username: "liam",
    avatar: "/images/p2.jpg",
    content:
      "Dark mode could be a fun next step after the core feed experience is fully polished.",
    likes: 5,
    liked: false,
    comments: [
      {
        id: "c15",
        username: "maria",
        content: "Yes, but only after the light theme feels complete.",
        replies: [],
      },
      {
        id: "c16",
        username: "alice",
        content: "Agreed. A strong default theme is more important first.",
        replies: [
          {
            id: "r12",
            username: "liam",
            content: "Exactly my thinking.",
          },
        ],
      },
    ],
  },
];
