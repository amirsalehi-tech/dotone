"use client";

import Image from "next/image";
import PostComposer from "@/src/components/composer/PostComposer";
import Feed from "@/src/components/feed/Feed";
import {usePosts} from "@/src/hooks/usePosts";

export default function Home() {
  const {posts, addPost, toggleLike, addComment} = usePosts();

  return (
    <main className="max-w-2xl mx-auto border-x border-gray-300 min-h-screen bg-white relative">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur border-b shadow-sm">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="App Logo"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <h1 className="text-xl font-bold tracking-tight">Social Media</h1>
        </div>
      </header>

      {/* Composer */}
      <section className="border-b">
        <PostComposer onPost={addPost} />
      </section>

      {/* Feed */}
      <Feed posts={posts} onLike={toggleLike} onComment={addComment} />
    </main>
  );
}
