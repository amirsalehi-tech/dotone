export interface Comment {
  id: string;
  username: string;
  content: string;
  likes: number;
  replies: Comment[];
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
