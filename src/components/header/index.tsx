"use client";

import {useTheme} from "@/src/hooks/useTheme";
import {Bell, Search, Sun, Moon} from "lucide-react";
import Image from "next/image";

export default function Header() {
  const {theme, toggleTheme} = useTheme();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-gray-800 backdrop-blur border-b shadow-md">
      <Image
        src="/images/logo.svg"
        alt="App Logo"
        width={64}
        height={64}
        priority
      />

      <div className="flex items-center gap-2">
        <button className="rounded-full p-2 text-gray-500 dark:text-gray-300 transition hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
          <Search className="h-5 w-5" />
        </button>

        <button className="rounded-full p-2 text-gray-500 dark:text-gray-300 transition hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
          <Bell className="h-5 w-5" />
        </button>

        <button
          onClick={toggleTheme}
          className="rounded-full p-2 text-gray-500 dark:text-gray-300 transition hover:bg-blue-50 dark:hover:bg-gray-800 cursor-pointer"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </button>
      </div>
    </header>
  );
}
