"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg p-2 flex justify-around z-10">
      <Link
        href="/"
        className={`p-2 flex flex-col items-center ${
          pathname === "/"
            ? "text-blue-500"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span className="text-xs">Beranda</span>
      </Link>
      <Link
        href="/report"
        className={`p-2 flex flex-col items-center ${
          pathname === "/report"
            ? "text-blue-500"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-xs">Lapor</span>
      </Link>
      <Link
        href="/search"
        className={`p-2 flex flex-col items-center ${
          pathname === "/search"
            ? "text-blue-500"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="text-xs">Cari</span>
      </Link>
      <Link
        href="/profile"
        className={`p-2 flex flex-col items-center ${
          pathname === "/profile"
            ? "text-blue-500"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <span className="text-xs">Profil</span>
      </Link>
    </nav>
  );
}
