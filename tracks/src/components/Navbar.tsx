"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 flex w-full flex-wrap items-center justify-between bg-white py-2">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ml-2">
          <Link className="text-xl mx-2 text-neutral-800" href="/user">
            User
          </Link>
          <Link className="text-xl mx-2 text-neutral-800" href="/tracks">
            Tracks
          </Link>
        </div>
      </div>
    </nav>
  );
}
