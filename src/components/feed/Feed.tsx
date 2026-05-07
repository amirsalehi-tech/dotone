import {Post} from "@/src/types/post";
import PostCard from "../post/PostCard";

interface Props {
  posts: Post[];
  onLike: (id: string) => void;
  onComment: (postId: string, text: string) => void;
}

export default function Feed({posts, onLike, onComment}: Props) {
  return (
    <div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={onLike}
          onComment={onComment}
        />
      ))}
    </div>
  );
}
