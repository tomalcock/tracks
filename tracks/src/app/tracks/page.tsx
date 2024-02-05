"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import convert from "../../utils/time";
import { BiSolidHeartCircle } from "react-icons/bi";
import NavBar from "@/components/Navbar";
import { useLikedTracks } from "../LikedTracksContext";

type Track = {
  id: number;
  name: string;
  artist: Artist;
  duration: number;
};

type Artist = {
  id: string;
  name: string;
  image: string;
};

export default function Tracks() {
  const { addLikedTrack } = useLikedTracks();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const response = await fetch(
        "https://api.npoint.io/725df6bf46634eb04dc8"
      );
      const data = await response.json();
      setTracks(data.results);
    };
    fetchTracks();
  }, []);

  const handleLike = (track: Track) => {
    addLikedTrack(track);
  };

  return (
    <div className="my-12">
      <NavBar />
      <ul>
        {tracks.map((track: Track) => {
          return (
            <li key={track.id}>
              <h1>{track.name}</h1>
              <h3>{convert(track.duration)}</h3>
              <h2>{track.artist.name}</h2>
              <Image
                src={track.artist.image}
                width={200}
                height={200}
                alt="artist"
              />
              <button
                onClick={() =>
                  handleLike({
                    id: track.id,
                    name: track.name,
                    artist: track.artist,
                    duration: track.duration,
                  })
                }
              >
                <BiSolidHeartCircle size={40} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
