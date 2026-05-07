"use client";

import {useRef} from "react";
import PostComposer from "@/src/components/composer";
import Feed from "@/src/components/feed";
import Header from "@/src/components/header";
import {usePosts} from "@/src/hooks/usePosts";

export default function Home() {
  const {posts, addPost, toggleLike, addComment} = usePosts();

  const feedRef = useRef<HTMLDivElement>(null);

  const scrollFeedToTop = () => {
    if (feedRef.current) {
      feedRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto max-w-2xl border-x border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 h-full flex flex-col">
        {/* Header */}
        <Header />

        {/* Composer */}
        <section className="border-b shrink-0">
          <PostComposer
            onPost={(text) => {
              addPost(text);
              scrollFeedToTop();
            }}
          />
        </section>

        <section
          ref={feedRef}
          className="flex-1 overflow-y-auto thin-scrollbar"
        >
          <Feed posts={posts} onLike={toggleLike} onComment={addComment} />
        </section>
      </div>
    </main>
  );
}
