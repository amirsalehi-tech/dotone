import {Bell, Search, SquarePen} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur border-b shadow-sm">
      <Image
        src="/images/logo.svg"
        alt="App Logo"
        width={64}
        height={64}
        priority
      />

      <div className="flex items-center gap-2">
        <button className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900">
          <Search className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900">
          <Bell className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
          <SquarePen className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
