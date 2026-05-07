export interface Reply {
  id: string;
  username: string;
  content: string;
}

export interface Comment {
  id: string;
  username: string;
  content: string;
  replies: Reply[];
}

export interface Post {
  id: string;
  username: string;
  avatar: string;
  content: string;
  likes: number;
  liked: boolean;
  comments: Comment[];
}
