"use client";

import NavBar from "@/components/Navbar";
import { useLikedTracks } from "../../contexts/LikedTracksContext";
import convert from "../../utils/time";

export default function UserPage() {
  const { likedTracks } = useLikedTracks();

  return (
    <div className="my-12">
      <NavBar />
      <div className="mx-4">
        <h1 className="my-4 text-2xl">This is the User page</h1>
        <h2 className="my-2">Liked tracks will appear here:</h2>
        <ul>
          {likedTracks.map((track) => (
            <li key={track.name} className="flex mx-4 my-2">
              <h1 className="mx-4">{track.name}</h1>
              <h2>{track.artist.name}</h2>
              <h3 className="mx-6">{convert(track.duration)}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
