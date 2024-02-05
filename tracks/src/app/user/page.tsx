"use client";

import NavBar from "@/components/Navbar";
import { useLikedTracks } from "../LikedTracksContext";

export default function UserPage() {
  const { likedTracks } = useLikedTracks();

  return (
    <div className="my-12">
      <NavBar />
      <ul>
        {likedTracks.map((track) => (
          <li key={track.name}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
}
