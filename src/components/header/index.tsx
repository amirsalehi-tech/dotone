"use client";

import {useTheme} from "@/src/hooks/useTheme";
import {Search, Sun, Moon} from "lucide-react";
import Image from "next/image";
import NotificationBell from "../notification";
import Button from "../ui/button/Button";

export default function Header() {
  const {theme, toggleTheme} = useTheme();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-gray-800 backdrop-blur border-b shadow-md">
      <div className="relative h-12 w-12">
        <Image
          src="/images/logo.svg"
          alt="App Logo"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <Button className="rounded-full p-2 text-gray-500 dark:text-gray-300 transition hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
          <Search className="h-5 w-5" />
        </Button>

        {/* Notifications */}
        <NotificationBell />

        {/* Theme toggle */}
        <Button
          onClick={toggleTheme}
          className="rounded-full p-2 text-gray-500 dark:text-gray-300 transition hover:bg-blue-50 dark:hover:bg-gray-800 cursor-pointer"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
}
