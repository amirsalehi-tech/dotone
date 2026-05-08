"use client";

import {useEffect, useRef, useState} from "react";
import {Bell, Heart, MessageCircle, UserPlus} from "lucide-react";
import Button from "../ui/button/Button";
import type {Notification} from "@/src/types/notification";
import { initialNotifications } from "@/src/data/mockNotification";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] =
    useState<Notification[]>(initialNotifications);

  const ref = useRef<HTMLDivElement>(null);

  const unread = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({
        ...n,
        read: true,
      })),
    );
  };

  const scrollToTarget = (targetId: string) => {
    const element = document.getElementById(targetId);

    if (!element) {
      console.warn("Target not found:", targetId);
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    element.classList.add("bg-blue-100", "dark:bg-blue-900/40");

    setTimeout(() => {
      element.classList.remove("bg-blue-100", "dark:bg-blue-900/40");
    }, 2000);
  };

  const handleNotificationClick = (notification: Notification) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === notification.id ? {...item, read: true} : item,
      ),
    );

    setOpen(false);

    setTimeout(() => {
      scrollToTarget(notification.targetId);
    }, 100);
  };

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;

      if (!next && unread > 0) {
        markAllAsRead();
      }

      return next;
    });
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (open && unread > 0) {
          markAllAsRead();
        }
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, unread]);

  const getIcon = (type: Notification["type"]) => {
    if (type === "like") return <Heart className="w-4 h-4 text-red-500" />;
    if (type === "reply")
      return <MessageCircle className="w-4 h-4 text-blue-500" />;
    if (type === "follow")
      return <UserPlus className="w-4 h-4 text-green-500" />;
  };

  return (
    <div className="relative" ref={ref}>
      <Button
        onClick={toggle}
        className="relative rounded-full p-2 transition text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Bell className="h-5 w-5" />

        {unread > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center text-xs bg-red-500 text-white min-w-4 h-4 px-1 rounded-full">
            {unread}
          </span>
        )}
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
          <div className="px-4 py-2 font-medium border-b dark:border-gray-700">
            Notifications
          </div>

          <ul>
            {notifications.map((n) => (
              <li
                key={n.id}
                onClick={() => handleNotificationClick(n)}
                className="cursor-pointer flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <div className="flex items-center gap-2 min-w-0">
                  {getIcon(n.type)}

                  <span
                    className={
                      n.read
                        ? "text-gray-400 dark:text-gray-500"
                        : "text-gray-800 dark:text-gray-200 font-medium"
                    }
                  >
                    {n.text}
                  </span>
                </div>

                {!n.read && (
                  <span className="ml-3 w-2 h-2 bg-blue-500 rounded-full shrink-0" />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
